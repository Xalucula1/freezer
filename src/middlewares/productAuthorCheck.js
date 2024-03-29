import { Product } from "../../db/models";

export default async function postAuthorCheck(req, res, next) {
  const { id } = req.params;
  const currentPost = await Product.findOne({ where: { id } });
  if (currentPost.userId === req.session?.user?.id) return next();
  return res.sendStatus(403);
}
