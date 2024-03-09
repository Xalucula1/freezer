import React from "react";

export default function Form({ addProductHandler }) {
  return (
    <form onSubmit={addProductHandler}>
      {/* <div className="mb-3">
        <img src={allProduct.img} className="card-img-top" alt='' />
      </div> */}
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          title
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          img
          <input
            name="img"
            className="form-control"
            type="text"
            id="exampleInputPassword1"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Category
          <input
            name="category"
            className="form-control"
            type="text"
            id="exampleInputPassword1"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
}
