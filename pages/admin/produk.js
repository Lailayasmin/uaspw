//@ts-nocheck

import React from "react";
import LayoutAdmin from "../../Component/Kadmin/LayoutAdmin";
import { produkFetch } from "../../lib/produkFetch";
import Link from "next/link";
import { mutate } from "swr";
import Router from "next/router";

export default function produk() {
  const {data, error} = produkFetch();
  if(error){
    return <div>Error Loading</div>
  }
  if(!data){
    return <div className="spinner-border m-5" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  }

  async function hapusProduk(idproduk){
    let res = await fetch(`/api/produk/hapusproduk?idproduk=${idproduk}`, { method: 'DELETE'});
    let json = await res.json()
    console.log(res);
    if(!res.ok) throw Error(json.message)
    
    mutate('/api/produk/hapusproduk')

    alert('Data telah dihapus')
    Router.push('/produk')
  }

  return (
    <div>
      <LayoutAdmin>
        <div className="container-fluid">
          <div className="row">
            <div className="">
              <h2>Produk</h2>
              <Link href="/tambah-produk">
              <button className=" btn btn-primary me-2"> <i className="bi bi-plus"></i> Tambah Produk </button>
              </Link>
            </div>
            <div className="table table-responsive mt-3">
              <table className="table table-striped">
                <thead className="text-center ">
                  <tr>
                    <th scope="col">Nama Produk</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Gambar</th>
                    <th scope="col">Opsi</th>

                  </tr>
                </thead>
                <tbody className="text-center">
                  {data.map((list, idx) =>
                  <tr key={idx}>
                  <td>{list.namaproduk}</td>
                  <td>{list.harga}</td>
                  <td>{list.deskripsi}</td>
                  <td>
                    <img 
                          className="img-fluid"
                          src={list.gambar}
                          alt="gambar"
                          style = {{width: "100px", height: "100px" }}/>
                  </td>
                  <td>
                    <Link href={`/update-produk?idproduk=${list.idproduk}&namaproduk=${list.namaproduk}&harga=${list.harga}&deskripsi=${list.deskripsi}&gambar=${list.gambar}`}>
                  <button className=" btn btn-primary me-2"> <i className="bi bi-pencil-fill"></i> Edit </button>
                  </Link>
                    
                    <button value = {list.idproduk} onClick={(e) => hapusProduk(e.target.value)} className=" btn btn-danger">Hapus <i className="bi bi-trash-fill"></i></button>
                  
                  </td>
                </tr>
                  
                  )}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </div>
  );
}
