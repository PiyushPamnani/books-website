import express from "express";
import cors from "cors";
import booksRouter from "./router/books.js";

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/", booksRouter);

app.listen(PORT, () =>
  console.log(`Connected to server: http://localhost:${PORT}`)
);
