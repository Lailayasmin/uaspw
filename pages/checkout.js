import React from "react";

export default function checkout() {
  return (
    <div>
      <div className="container">
        <div className="py-5 text-center">
          <h2>Halaman Checkout</h2>
        </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Masukkan Alamat</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="firstName">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder
                    defaultValue
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Valid first name is required.{" "}
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  Email <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  {" "}
                  Please enter a valid email address for shipping updates.{" "}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  Nomor Handphone <span className="text-muted"></span>
                </label>
                <input
                  type="nomorhandphone"
                  className="form-control"
                  id="nomorhandphone"
                  placeholder="0852819123"
                />
                <div className="invalid-feedback">
                  {" "}
                  Please enter a valid email address for shipping updates.{" "}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Alamat</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Please enter your shipping address.{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Negara</label>
                  <input
                    type="text"
                    className="form-control"
                    id="negara"
                    placeholder
                    defaultValue
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Please select a valid country.{" "}
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">Provinsi</label>
                  <input
                    type="text"
                    className="form-control"
                    id="provinsi"
                    placeholder
                    defaultValue
                    required
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Please provide a valid state.{" "}
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Kode Pos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kodepos"
                    placeholder
                    required
                  />
                  <div className="invalid-feedback"> Zip code required. </div>
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}
