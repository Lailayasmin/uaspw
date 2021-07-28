import React from "react";
import Navbar from "../Kadmin/navbar";
import Sidebar from "../Kadmin/sidebar";
import Head from "next/head";

export default function LayoutAdmin(props) {
  return (
    <div>
      <Head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      </Head>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Navbar />
          <div id="content">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
