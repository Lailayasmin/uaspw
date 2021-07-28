//@ts-check
import { db } from "../../../lib/db";

const userlist = async (_, res) => {
  try {
    const user = await db.query(`SELECT * FROM user `);
    await db.end;
console.log(user);
    return res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default userlist;
