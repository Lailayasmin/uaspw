import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head"
export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      </Head>
      <main className="flex-shrink-0">
        <Navbar />
        {props.children}
        <Footer />
      </main>
    </div>
  );
}
