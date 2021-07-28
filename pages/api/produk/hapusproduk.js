import { db } from "../../../lib/db";

const handler = async(req, res) => {
    const { idproduk } = req.query
    try {
        if (!idproduk ){
            return res
                .status(400)
                .json({message: 'Isi dulu ya'})
        }

        const result = await db.query(
            `DELETE FROM produk
            WHERE idproduk = ?
            `,idproduk
            );

            console.log(result);
        return res.json(result)
    }
    catch (e) {
        res.status(500).json({message: e.message})
    }
}

export default handler;