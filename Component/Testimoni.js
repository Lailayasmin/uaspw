import React from "react";

export default function Testimoni() {
  return (
    <div>
      <div className="testimonials-clean">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Testimonials </h2>
            {/* <p className="text-center">
              Our customers love us! Read what they have to say below. Aliquam
              sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet
              vitae.
            </p> */}
          </div>
          <div className="row people">
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  Produknya benar-benar premium dengan harga yang murah, garansinya juga aktif.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src="https://1rll9g2b46z2gn8pt3dlgaqp-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/avatars_avatar2_resize-250x250.jpg" />
                <h5 className="name">Ben Johnson</h5>
                <p className="title">CEO of Company Inc.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  Kemarin habis beli disini, sekarang mau beliin lagi buat istri. Produk Terjamin!
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src="https://1rll9g2b46z2gn8pt3dlgaqp-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/avatars_avatar2_resize-250x250.jpg" />
                <h5 className="name">Carl Kent</h5>
                <p className="title">Founder of Style Co.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <p className="description">
                  Suka banget belanja jam disini, barangya bagus semua.
                </p>
              </div>
              <div className="author">
                <img className="rounded-circle" src="https://1rll9g2b46z2gn8pt3dlgaqp-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/avatars_avatar2_resize-250x250.jpg" />
                <h5 className="name">Emily Clark</h5>
                <p className="title">Owner of Creative Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
