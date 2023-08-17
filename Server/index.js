import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { userRoute } from "./routes/userRoutes.js";
import { PackageDataRoute } from "./routes/packageRouter.js";
import { data } from "./data/dateCreate.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
// app.get("/api/data", data);
app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
app.use("/api/user", userRoute);
app.use("/api/package", PackageDataRoute);
