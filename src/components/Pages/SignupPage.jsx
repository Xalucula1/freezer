import React from "react";
import axios from "axios";

export default function SignUpPage() {
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    try {
      const response = await axios.post("/api/auth/signup", formData);
      if (response.status === 200) {
        window.location = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </label>

        <div id="emailHelp" className="form-text">
          Email of the form *@*
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="nameinput" className="form-label">
          Name
          <input
            name="name"
            type="text"
            className="form-control"
            id="nameinput"
          />
        </label>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
