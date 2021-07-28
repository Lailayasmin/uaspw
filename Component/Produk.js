//@ts-check
import React from "react";
import List from "./isiProduk/list";
import { produkFetch } from "../lib/produkFetch";
export default function Produk() {
  const { data, error } = produkFetch();
  if (error) {
    return <div>Error Loading</div>;
  }
  if (!data) {
    return (
      <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div>
      <div className="col-12 " id="Produk">
        <div className="heading text-center mt-5 px-5">
          <h1 className=" fw-bold">Yuk Beli Sekarang!</h1>
        </div>
      </div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((produk, idx) => (
              <List
                key={idx}
                idproduk={produk.idproduk}
                gambarProduk={produk.gambar}
                namaProduk={produk.namaproduk}
                hargaProduk={produk.harga}
                deskripsi={produk.deskripsi}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
