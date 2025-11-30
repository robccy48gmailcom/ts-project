import "dotenv/config";
import express from "express";
import { connectDB } from "./mongo";
import cors from "cors";

async function main() {
  //const app = express();
  //app.use(cors());
  try {
    const db = await connectDB();
    const users = db.collection("users");
    const result = await users.insertOne({ name: "john" });
    console.log("Inserted:", result.insertedId);
    console.log(process.platform);
    console.log(process.env.WSL_DISTRO_NAME);
    console.log(process.env.WSL_INTEROP);
  } catch (err) {
    console.error(err);
  }
  //   res.json(result);
  // app.post("/api/users", async (req, res) => {
  //   const result = await users.insertOne(req.body);
  //   res.json(result);
  // });

  // app.get("/api/users", async (req, res) => {
  //   const all = await users.find().toArray();
  //   res.json(all);
  // });

  // const port = process.env.PORT || 4000;
  // app.listen(port, () => console.log(`API running on port ${port}`));
}

main().catch(console.error);
