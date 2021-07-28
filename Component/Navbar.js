import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand text-white fw-bold" href="/">
            {/* <img
              src="https://brandslogos.com/wp-content/uploads/images/large/c-logo-1.png"
              width="60"
            ></img> */}
            Centrum
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <Link href="/">
                <li className="nav-item">
                  <a className="nav-link text-white">Home</a>
                </li>
              </Link>
              <Link href="/About">
                <li className="nav-item">
                  <a className="nav-link text-white">About</a>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link text-white" href="/Kontak">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#Produk">
                  Produk
                </a>
              </li>
              <div className="dropdown">
                <a
                  className="btn btn-dark"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-person"></i> Akun
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/Login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Daftar">
                      Daftar
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
