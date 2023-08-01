import express from "express";
import cors from "cors";
import booksRouter from "./router/books.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/", booksRouter);

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
