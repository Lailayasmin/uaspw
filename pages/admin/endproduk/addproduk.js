import Router from "next/router";
import { useState } from "react";

export default function addproduk() {

    const [idproduk, setIdProduk] = useState('');
    const [namaproduk, setNamaProduk] = useState('');
    const [harga, setharga] = useState('');
    const [deskripsi, setdeskripsi] = useState('');
    const [gambar, setgambar] = useState(null)
    const [selectedFile, setSelectedFile] = useState('')
    const [file, setFile] = useState('')

    const onSelectImage = (e) => {
      if(!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
      }
          const _file = e.target.files[0];
          const reader = new FileReader()
          reader.onload = function(){
            setFile(_file);
            setgambar(reader.result);
          }
          reader.readAsDataURL(_file)
    }
    
    

    async function submitHandler(e){
        e.preventDefault()
        try{
            const res = await fetch("http://localhost:3000/api/produk/tambahProduk", 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    idproduk,
                    namaproduk,
                    harga,
                    deskripsi,
                    gambar
                }),
            })
            console.log(res);
            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Data berhasil di input!")
            Router.push('/produk') 
        }
        catch (e){
            throw Error(e.message)
        }
    }
  return (
    <div>
        <div className="container">
      <form className="form-horizontal mt-5" onSubmit={submitHandler}>
        <fieldset>
          {/* Form Name */}
          <h2 className="text-center">Masukkan Data Produk</h2>
          {/* Text input*/}
          <div className=" boxaddproduk ">
          {/* <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="produkid">
              Produk ID
            </label>
            <div className="col-md-4">
              <input
                id="idproduk"
                name="idproduk"
                placeholder="ID PRODUK"
                className="form-control input-md"
                value = {idproduk}
                onChange = {(e) => setIdProduk(e.target.value)}
                required
                type="text"
              />
            </div>
          </div> */}
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="namaproduk">
              Nama Produk
            </label>
            <div className="col-md-4">
              <input
                id="namaproduk"
                name="namaproduk"
                className="form-control input-md"
                value={namaproduk}
                onChange = {(e) => setNamaProduk(e.target.value)}
                type="text"
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="harga">
              Harga
            </label>
            <div className="col-md-4">
              <input
                id="harga"
                name="harga"
                className="form-control input-md"
                value={harga}
                onChange = {(e) => setharga(e.target.value)}
                required
                type="text"
              />
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label
              className="col-md-4 control-label"
              htmlFor="deskripsi"
            >
              Deskripsi
            </label>
            <div className="col-md-4">
              <input
                id="deskripsi"
                name="deskripsi"
                value = {deskripsi}
                onChange = {(e) => setdeskripsi(e.target.value)}
                className="form-control"
                required
                type="text"
              ></input>
            </div>
          </div>
          {/* Text input*/}
              {/* File Button */}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="upload">
                  <img className="rounded-circle" src={gambar} alt="Pilih Gambar" style={{background: "gray", width : "100px", height : "100px" }}/>
                </label>
                <div className="col-md-4">
                  <input
                    id="upload"
                    type="file"
                    style = {{display: "none"}}
                    onChange = {onSelectImage}
                  />
                </div>
              </div>
              {/* File Button */}
              {/* Button */}
              <div className="form-group">
                <div className="col-md-4 d-flex justify-content-end align-content-end">
                  <button
                    id="singlebutton"
                    name="singlebutton"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
        </fieldset>
      </form>
      </div>
    </div>
  );
}
