import Layout from '../../Component/Layout'

export default function Produk1() {
  return (
    <div>
      <Layout> 
      <div className="site-section mt-5 px-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="item-entry">
                <a href="#" className="product-item md-height bg-gray d-block">
                  <img
                    src="https://assets.jamtangan.com/images/product/casio/AE-1000W-1A/1m.webp"
                    alt="Image"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="text-black">Gray Shoe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, vitae, explicabo? Incidunt facere, natus soluta
                dolores iusto! Molestiae expedita veritatis nesciunt doloremque
                sint asperiores fuga voluptas, distinctio, aperiam, ratione
                dolore.
              </p>
              <p className="mb-4">
                Ex numquam veritatis debitis minima quo error quam eos dolorum
                quidem perferendis. Quos repellat dignissimos minus, eveniet nam
                voluptatibus molestias omnis reiciendis perspiciatis illum hic
                magni iste, velit aperiam quis.
              </p>
              <p>
                <strong className="text-primary h4">$50.00</strong>
              </p>
              <p>
                <a
                  href="/checkout"
                  className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
                >
                  Beli Sekarang
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  );
}
