import axios from "axios";
import React, { useState } from "react";
import ProductCard from "../UI/ProductCard";
import ProductForm from "../UI/ProductForm";

export default function ProductPage({ allProduct, user }) {
  const [product, setProduct] = useState(allProduct || []);
  const addProductHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/product",
        Object.fromEntries(new FormData(e.target))
      );
      setProduct((prev) => [data, ...prev]);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProductHandler = async (productId) => {
    try {
      const response = await axios.delete(`/api/product/${productId}`);
      if (response.status === 200) {
        setProduct((prev) => prev.filter((el) => el.id !== productId));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateProductHandler = async (newProduct) => {
    const response = await axios.patch(
      `/api/product/${newProduct.id}`,
      newProduct
    );
    setProduct((prev) =>
      prev.map((el) => (el.id === newProduct.id ? response.data : product))
    );
  };
  //   const [category, setCategory] = useState(allCategory || []);
  return (
    <>
      <div className="row">
        <div className="col-3">
          <ProductForm addProductHandler={addProductHandler} />
        </div>
      </div>
      <div className="row">
        <div className="list-group">
          {product.map((el) => (
            <ProductCard
              updateProductHandler={updateProductHandler}
              user={user}
              deleteProductHandler={deleteProductHandler}
              product={el}
              //   category={category}
              key={el.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
