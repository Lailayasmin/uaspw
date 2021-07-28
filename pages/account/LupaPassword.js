import React from "react";

export default function LupaPassword() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center d-flex py-5">
          <div className="col-6">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  {/* <div className="col-lg-6 d-none d-lg-block bg-password-image" /> */}
                  <div className="col-lg-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">
                          Forgot Your Password?
                        </h1>
                        <p className="mb-4">
                          We get it, stuff happens. Just enter your email
                          address below and we'll send you a link to reset your
                          password!
                        </p>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <a
                          href="login.html"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Reset Password
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="/daftar">
                          Create an Account!
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="/login">
                          Already have an account? Login!
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
    </div>
  );
}
