import express from "express";

import {
  createPackageData,
  getAllPackagesData,
  getPackage,
  deletePackage,
} from "../controllers/packageCntrl.js";

const router = express.Router();

router.post("/create", createPackageData);
router.get("/allpty", getAllPackagesData);
router.get("/:id", getPackage);
router.delete("/deletepackage", deletePackage);
export { router as PackageDataRoute };
