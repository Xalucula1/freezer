import React from "react";
import axios from "axios";

export default function NavBar({ user }) {
  const logoutHandler = async () => {
    const response = await axios.get("/api/auth/logout");
    if (response.status === 200) {
      window.location = "/";
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {user?.id ? `Hello, ${user.name}` : "Guest"}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {!user?.id && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    SignIn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    SignUp
                  </a>
                </li>
              </>
            )}
            {user?.id && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/product">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
