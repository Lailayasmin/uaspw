module.exports = {
  async rewrites() {
    return [
      {
        source: '/Login',
        destination: '/account/Login',
      },
      {
        source: '/Daftar',
        destination: '/account/Daftar',
      },
      {
        source: '/LupaPassword',
        destination: '/account/LupaPassword',
      },
      {
        source: '/admin',
        destination: '/admin/dashboard',
      },
      {
        source: '/produk',
        destination: '/admin/produk',
      },
      {
        source: '/user',
        destination: '/admin/user',
      },
      {
        source: '/order',
        destination: '/admin/order',
      },
      {
        source: '/Detail-produk',
        destination: '/produk/Produk1',
      },
      {
        source: '/tambah-produk',
        destination: '/admin/endproduk/addproduk',
      },
      {
        source: '/update-produk',
        destination: '/admin/endproduk/updateproduk',
      },
    ]
  },
}