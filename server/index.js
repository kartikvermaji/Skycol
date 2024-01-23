//importing
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

//configurations
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//importing ROUTES/MODELS/MIDDLEWARES/CONTROLLERS
import authRouter from "./Routes/authRoute.js"
import userRouter from "./Routes/userRoute.js"
import postRouter from "./Routes/postRoute.js"

//Setting Up Routes
app.use("/auth",authRouter);
app.use("/user",userRouter);
app.use("/posts",postRouter);


//MONGOOOSE
const url = process.env.MONGO_URL;
mongoose
  .connect(url)
  .then(() => {
    const Port = process.env.PORT;
    app.listen(Port, function (err) {
      if (err) {
        console.log("error on connecting to port: ", err);
      }
      console.log("Server Is Hitting at : ",Port);
    });
  })
  .catch((err) => {
    console.log("error on connecting to mongoose :", err);
  });