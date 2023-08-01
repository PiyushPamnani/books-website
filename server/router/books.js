import express from "express";
import {
  bookCreate,
  getBooks,
  getSingleBook,
  creatingBook,
  deletingBook,
  updatingBook,
} from "../controllers/books.js";
import cors from "cors";

const router = express.Router();

router.use(cors());

router.get("/", bookCreate);

router.get("/books", getBooks);

router.get("/books/:id", getSingleBook);

router.post("/books", creatingBook);

router.delete("/books/:id", deletingBook);

router.put("/books/:id", updatingBook);

export default router;
