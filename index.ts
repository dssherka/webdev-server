import express from "express";
import cors from "cors";
import Hello from "./Hello";
const app = express();
app.use(cors());
app.use(express.json());
Hello(app);
app.listen(process.env.PORT || 4000);
