import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    return client.db("mydatabase"); // your DB name
  } catch (err) {
    console.error(err);
    throw err;
  }
}
