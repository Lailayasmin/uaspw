import React from "react";

export default function Keunggulan() {
  return (
    <div>
      <section className="py-5" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0">
                Apa Saja Sih Keunggulan Produk Kami?
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-collection" />
                  </div>
                  <h2 className="h5">Harga Murah</h2>
                  <p className="mb-0">
                    Harga yang kami tawarkan terbilang lebih dari toko lain.
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-building" />
                  </div>
                  <h2 className="h5">Kualitas Premium</h2>
                  <p className="mb-0">
                    Meskipun dengan harga yang murah, tetapi kualitas premium.
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-toggles2" />
                  </div>
                  <h2 className="h5">Anti Rusak dan Karat</h2>
                  <p className="mb-0">
                    Mempunyai kualitas barang yang sangat terjamin awet dan tahan lama.
                  </p>
                </div>
                <div className="col h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-shield" />
                  </div>
                  <h2 className="h5">Garansi</h2>
                  <p className="mb-0">
                    Takut tidak dapat garansi ketika barang rusak? Kita punya Garansinya!.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
