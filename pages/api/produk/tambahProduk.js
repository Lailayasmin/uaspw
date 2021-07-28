import {db} from '../../../lib/db'

const handler = async (req,res) => {
    const {idproduk, namaproduk, harga, deskripsi, gambar} = req.body;
    try {
        if (!namaproduk || !harga || !deskripsi || !gambar){
            return res
                .status(400)
                .json({message: 'Masukkan Data Dengan Lengkap'})
        }
        const result = await db.query(`
        INSERT INTO produk (idproduk, namaproduk, harga, deskripsi, gambar)
        VALUES (?,?,?,?,?)`, [idproduk, namaproduk, harga, deskripsi, gambar])

        await db.end
        return res.json(result)
    }
    catch (e) {
        res.status(500).json({message: e.message})
    }
}

 export default handler;
