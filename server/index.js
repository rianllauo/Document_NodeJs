import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 5000;

// mongodb
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/fullstack_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Databse Connected!"));

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
