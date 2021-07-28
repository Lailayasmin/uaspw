import React from 'react'
import LayoutAdmin from '../../Component/Kadmin/LayoutAdmin'
export default function order() {
    return (
        <div>
             <LayoutAdmin>
        <div className="container-fluid">
          <div className="row">
            <div className="">
              <h2>Order</h2>
              
            </div>
            <div className="table table-responsive mt-3">
              <table className="table table-striped">
                <thead className="text-center ">
                  <tr>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gambar</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Opsi</th>

                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                    <button className=" btn btn-primary me-2"> <i className="bi bi-pencil-fill"></i> Edit </button>
                      
                      <button className=" btn btn-danger">Hapus <i className="bi bi-trash-fill"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </LayoutAdmin>
        </div>
    )
}
