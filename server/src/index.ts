import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors(
  {
    origin:["finance-tracker-alpha-self.vercel.app"],
    credentials: true,
    methods: ["POST", "GET"]
  }
));

const mongoURI: string =
  "mongodb+srv://migasiuk250:Um23Q8aMkNMfQyT5@finacialtracker.aolg7bn.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
