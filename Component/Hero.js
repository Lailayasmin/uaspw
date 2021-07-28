import React from "react";

export default function Hero() {
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="my-5 text-left text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Centrum Watch!
                </h1>
                <p className="lead fw-normal text-white-10 mb-4">
                  Saatnya mulai untuk memanjakan kemewahan dalam diri anda!
                </p>
                
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                className="img-fluid my-5 w-100"
                src="/centrumwatch.png"
                alt="..."
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
