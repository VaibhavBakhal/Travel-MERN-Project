import asyncHandler from "express-async-handler";
import prisma from "../config/PrismaConfig.js";

// Create new Users
export const createUser = asyncHandler(async (req, res) => {
  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User registered Sucessfully",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User Allready Registered" });
  }
});
// add  or remove Favoutire
export const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user.fevPackageID.includes(rid)) {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          fevPackageID: {
            set: user.fevPackageID.filter((id) => id !== rid),
          },
        },
      });
      res
        .status(200)
        .send({ message: "removed from Favourites", user: updatedUser });
    } else {
      const updatedUser = await prisma.user.update({
        where: { email },
        data: { fevPackageID: { push: rid } },
      });
      res
        .status(200)
        .send({ message: "Updated Favourites", user: updatedUser });
    }
  } catch (err) {
    res.status(500).send({ message: "Something Went Wrong :toFev:" });
    console.log(err);
  }
});
//  get all favourite Property
export const getAllFavorites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favProperties = await prisma.user.findUnique({
      where: { email },
      select: { fevPackageID: true },
    });
    res
      .status(200)
      .send({ message: "fatched favourites Packages", favProperties });
  } catch (err) {
    res.status(500).send({ message: "Something Went Wrong :getAllFavorites:" });
    console.log(err);
  }
});
// add created package to user
export const addPackage = asyncHandler(async (req, res) => {
  const { email, id } = req.body;
  try {
    const updateUser = await prisma.user.update({
      where: { email },
      data: {
        createdProperties: {
          push: id,
        },
      },
    });
    res.send({ message: "property added to user", updateUser });
  } catch (err) {
    res.status(500).send({ message: "Something Went Wrong :addPackage:" });
    console.log(err);
  }
});

// Book a Package

export const bookPackage = asyncHandler(async (req, res) => {
  const { email, adults } = req.body;
  const { id } = req.params;
  try {
    const allreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    if (allreadyBooked.bookedVisits.some((pkg) => pkg.id === id)) {
      res
        .status(400)
        .json({ message: "This package is allready booked by you " });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, adults } },
        },
      });
      res.send("your Package is booked Successfully");
    }
  } catch (err) {
    res.status(500).send({ message: "Something Went Wrong :bookPackage:" });
    console.log(err);
  }
});

// function to cancel Package
export const cancelPackage = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });
    const index = user.bookedVisits.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: { bookedVisits: user.bookedVisits },
      });
      res.status(200).send("Booking cancelled Successfully");
    }
  } catch (err) {
    res.status(500).send({ message: "Something Went Wrong :cancelPackage:" });
    console.log(err);
  }
});

export const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings);
  } catch (err) {
    res.status(500).send({ message: "Something Went Wrong :allBookings:" });
    console.log(err);
  }
});
