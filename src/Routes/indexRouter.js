import express from "express";
import { User, Product, Category } from '../../db/models';

const router = express.Router();

router.get("/", (req, res) => {
  res.render("Layout");
});

router.get("/login", (req, res) => {
  res.render("Layout");
});

router.get("/signup", (req, res) => {
  res.render("Layout");
});

router.get("/logout", (req, res) => {
  res.render("Layout");
});

router.get("/product", async (req, res) => {
  const allProduct = await Product.findAll({
    include: [User, Category],
    order: [['updatedAt', 'DESC']],
  });
  const initState = { allProduct };
  res.render('Layout', initState);
});

export default router;
