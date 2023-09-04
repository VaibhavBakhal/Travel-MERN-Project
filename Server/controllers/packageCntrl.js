import asyncHandler from "express-async-handler";
import prisma from "../config/PrismaConfig.js";

// create a residency in and put in collection
export const createPackageData = asyncHandler(async (req, res) => {
  const {
    destination,
    desc,
    rating,
    price,
    departureDate,
    departureLocation,
    departureTime,
    returnTime,
    returnDate,
    dressCode,
    notIncluded,
    included,
    images,
    imageDesc,
    tourPlan,
    userEmail,
  } = req.body.data;
  console.log(req.body.data);
  try {
    const packageData = await prisma.packageData.create({
      data: {
        destination,
        desc,
        rating,
        price,
        departureDate,
        departureLocation,
        departureTime,
        returnTime,
        returnDate,
        dressCode,
        notIncluded,
        included,
        images,
        imageDesc,
        tourPlan,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({
      message: "Package created sucessfully",
      packageData,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something Went Wrong :createPackageData:" });
    console.log(err);
  }
});
// get all the Property
export const getAllPackagesData = asyncHandler(async (req, res) => {
  try {
    const Packages = await prisma.packageData.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).send(Packages);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Something Went Wrong :getAllPackagesData:" });
    console.log(err);
  }
});

//get a single property by id
export const getPackage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const Package = await prisma.packageData.findUnique({ where: { id } });
    res.status(200).send(Package);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something Went Wrong :getPackage:" });
  }
});

export const deletePackage = asyncHandler(async (req, res) => {
  const { email, rid } = req.body;
  try {
    const User = await prisma.user.findUnique({
      where: { email },
    });
    if (User.createdProperties.includes(rid)) {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          createdProperties: {
            set: User.createdProperties.filter((id) => id !== rid),
          },
        },
      });
      await prisma.packageData.delete({ where: { id: rid } });
      res.status(200).send({ message: "property deleted", updatedUser });
    } else {
      res.status(400).send({ message: "property is not own by you " });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something Went Wrong :deletePackage:" });
  }
});
