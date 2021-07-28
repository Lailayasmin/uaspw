import React from "react";
import Layout from "../../Component/Layout";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Layout>
      <div className="container">
        <div className="row justify-content-center mt-5 py-5 px-5">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  {/* <div className="col-lg-6 d-none d-lg-block bg-login-image" /> */}
                  <div className="col-lg-12 d-flex flex-column justify-content-center align-content-center">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Selamat Datang Kembali!</h1>
                      </div>
                      <form className="user w-50 mx-auto">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <Link href="/admin">
                        <a className="btn btn-primary btn-user btn-block w-50 mx-auto"
                        >
                          Login
                        </a>
                        </Link>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="/lupapassword">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="/Daftar">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  );
}
