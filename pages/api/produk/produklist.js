//@ts-check
import { db } from "../../../lib/db";

const produklist = async (_, res) => {
  try {
    const produk = await db.query(`SELECT * FROM produk`);
    await db.end;
    return res.json(produk);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default produklist;
