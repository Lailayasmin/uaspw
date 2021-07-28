//@ts-check
import Link from "next/link";

export default function List(props) {
  return (
    <>
        <div className="col mb-5">
          <div className="card h-100">
            <img className="card-img-top" src={props.gambarProduk} alt="..." />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{props.namaProduk}</h5>
                {props.hargaProduk}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <Link href={`/detail-produk?idproduk=${props.idproduk}`}>
                <button className="btn btn-outline-dark mt-auto" >
                  Beli
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
