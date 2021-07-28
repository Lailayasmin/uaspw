import React from "react";
import LayoutAdmin from "../../Component/Kadmin/LayoutAdmin";
import { userFetch } from "../../lib/userFetch";

export default function user() {
  const {data, error} = userFetch();
  if(error){
    return <div>Error Loading</div>
  }
  if(!data){
    return <div class="spinner-border m-5" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  }

  return (
    <div>
      <LayoutAdmin>
        <div className="container-fluid">
          <div className="row">
            <div className="">
              <h2>User</h2>
            </div>
            <div className="table table-responsive mt-3">
              <table className="table table-striped">
                <thead className="text-center ">
                  <tr>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {data.map((user, idx)=>
                  <tr key={idx}>
                  <td>{user.namauser}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
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
