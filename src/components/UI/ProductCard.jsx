import React, { useEffect, useState } from "react";

export default function PostCard({
  product: productFromArray,
  deleteProductHandler,
  user,
  img,
  // categoryname: category,
  updateProductHandler,
}) {
  const [editing, setEditing] = useState(null);
  const [product, setProduct] = useState(productFromArray);
  const changeProductHandler = (e) =>
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  useEffect(() => {
    if (editing === false) {
      updateProductHandler(product);
    }
  }, [editing]);
  console.log(product);
  //   const [category, setCategory] = useState(categoryFromArray);
  //   const changeCategoryHandler = (e) =>
  //     setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   useEffect(() => {
  //     if (editing === false) {
  //       updatepProductHandler(category);
  //     }
  //   }, [editing]);
  // console.log(productFromArray)
  return (
    <div className="card" style={{ width: "18rem" }}>
      {editing ? (
        <input
          name="img"
          onChange={changeProductHandler}
          value={product.img}
          className="form-control"
        />
      ) : (
        <img src={product.img} className="card-img-top" alt="img" />
      )}

      <div className="card-body">
        <div className="d-flex w-100 justify-content-between">
          {editing ? (
            <input
              name="title"
              onChange={changeProductHandler}
              value={product.title}
              className="form-control"
            />
          ) : (
            <h5 className="mb-1">{product.title}</h5>
          )}
          <small>{product.User?.name}</small>
          <small>{product.Category?.categoryname}</small>
        </div>
        {/* {editing ? (
          <input
            name="category"
            onChange={changeProductHandler}
            value={product.categoryname}
            className="form-control"
          />
        ) : (
          <h5 className="mb-1">{product.categoryname}</h5>
        )} */}
        <small className="btn-group">
          <button
            onClick={() => deleteProductHandler(product.id)}
            disabled={product.userId !== user?.id}
            className="btn btn-danger"
            type="button"
          >
            Del
          </button>
          <button
            onClick={() => setEditing(!editing)}
            disabled={product.userId !== user?.id}
            className="btn btn-info"
            type="button"
          >
            Edit
          </button>
        </small>
      </div>
    </div>
  );
}
