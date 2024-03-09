import express from "express";
import { Product, User, Category } from "../../db/models";
import isAuth from "../middlewares/isAuth";
import productAuthorCheck from "../middlewares/productAuthorCheck";

const productRouter = express.Router();

productRouter
  .route("/:id")
  .delete(productAuthorCheck, async (req, res) => {
    try {
      const { id } = req.params;
      await Product.destroy({ where: { id } });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const foundProduct = await Product.findOne({ where: { id } });
      const { title, img } = req.body;
      foundProduct.title = title;
      foundProduct.img = img;
      await foundProduct.save();
      const newRes = await Product.findall();
      return res.json(newRes);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    const foundProduct = await Product.findOne({
      where: { id: req.params.id },
    });
    return res.json(foundProduct);
  });

productRouter.post("/", isAuth, async (req, res) => {
  try {
    const { title, img, category } = req.body;
    const newCategory = await Category.findOrCreate({ where: { categoryname: category } });
    // console.log(newCategory)
    const newProduct = await Product.create({
      title,
      img,
      categoryId: newCategory[0].id,
      userId: req.session?.user?.id,
      // categoryId: req.session?.category.id,
    });
    const newProductWithUserWithCategory = await Product.findOne({
      where: { id: newProduct.id },
      include: [User, Category],
    });
    return res.json(newProductWithUserWithCategory);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

export default productRouter;
