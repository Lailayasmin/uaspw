import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const updateproduk = () => {
  //Deklarasi State
  const [_idproduk, setIdProduk] = useState("");
  const [_namaproduk, setNamaProduk] = useState("");
  const [_harga, setHarga] = useState("");
  const [_deskripsi, setDeskripsi] = useState("");
  const [_gambar, setGambar] = useState(null)
  const [selectedFile, setSelectedFile] = useState('');
  const [file, setFile] = useState('')

  //mengambil data yang dikirim melalui router
  const router = useRouter();
  const { idproduk, namaproduk, harga, deskripsi } = router.query;

  useEffect(() => {
    if (typeof idproduk == "string") {
      setIdProduk(idproduk);
    }
    if (typeof namaproduk == "string") {
      setNamaProduk(namaproduk);
    }
    if (typeof harga == "string") {
      setHarga(harga);
    }
    if (typeof deskripsi == "string") {
      setDeskripsi(deskripsi);
    }
    if (typeof gambar == "string") {
      setGambar(gambar);
    }
  }, [idproduk, namaproduk, harga, deskripsi]);

  const onSelectImage = (e) => {
    if(!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
        const _file = e.target.files[0];
        const reader = new FileReader()
        reader.onload = function(){
          setFile(_file);
          setGambar(reader.result);
        }
        reader.readAsDataURL(_file)
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/produk/updateproduk", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idproduk: _idproduk,
          namaproduk: _namaproduk,
          harga: _harga,
          deskripsi: _deskripsi,
          gambar : _gambar
        }),
      });
      console.log(res);
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Update Data Sukses!");
      Router.push("/produk");
      console.log(json);
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <div>
      <div>
        <div className="container">
          <form className="form-horizontal mt-5" onSubmit={submitHandler}>
            <fieldset>
              {/* Form Name */}
              <h2 className="text-center">Edit Data Produk</h2>
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
                  <label
                    className="col-md-4 control-label"
                    htmlFor="namaproduk"
                  >
                    Nama Produk
                  </label>
                  <div className="col-md-4">
                    <input
                      id="namaproduk"
                      name="namaproduk"
                      className="form-control input-md"
                      value={_namaproduk}
                      onChange={(e) => setNamaProduk(e.target.value)}
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
                      value={_harga}
                      onChange={(e) => setHarga(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                {/* Select Basic */}
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="deskripsi">
                    Deskripsi
                  </label>
                  <div className="col-md-4">
                    <input
                      id="deskripsi"
                      name="deskripsi"
                      value={_deskripsi}
                      onChange={(e) => setDeskripsi(e.target.value)}
                      className="form-control"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="upload">
                  <img className="rounded-circle" src={_gambar} alt="Pilih Gambar"/>
                </label>
                <div className="col-md-4">
                  <input
                    id="upload"
                    type="file"
                  
                    onChange = {onSelectImage}
                  />
                </div>
              </div>
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
    </div>
  );
};

export default updateproduk;
