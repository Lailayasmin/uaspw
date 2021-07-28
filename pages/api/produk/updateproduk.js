//@ts-check

import {db} from '../../../lib/db'

const handler = async (req,res) => {
    const {idproduk, namaproduk, harga, deskripsi, gambar} = req.body;
    try {
        if ( !namaproduk || !harga || !deskripsi || !gambar ){
            return res
                .status(400)
                .json({message: 'Isi dulu ya'})
        }
        const result = await db.query(
            `UPDATE produk set idproduk = ?, namaproduk = ?, harga = ?, deskripsi = ?, gambar = ?
            WHERE idproduk = ?`,  [idproduk, namaproduk, harga, deskripsi, gambar, idproduk]
            );

            console.log(result);
        return res.json(result)
    }
    catch (e) {
        res.status(500).json({message: e.message})
    }
}

export default handler;
