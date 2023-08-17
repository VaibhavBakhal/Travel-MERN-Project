import express from "express";

import {
  createUser,
  toFav,
  getAllFavorites,
  addPackage,
  bookPackage,
  cancelPackage,
  allBookings,
} from "../controllers/userCntrl.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/tofav/:rid", toFav);
router.get("/getfav", getAllFavorites);
router.post("/addpackage", addPackage);
router.post("/bookvisit/:id", bookPackage);
router.post("/cancelbooking/:id", cancelPackage);
router.get("/allbookings", allBookings);
export { router as userRoute };
