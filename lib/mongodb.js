import { MongoClient } from "mongodb";

let client;

export function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI must be configured before using authentication");
  }

  if (!client) {
    client = new MongoClient(uri);
  }

  return client;
}