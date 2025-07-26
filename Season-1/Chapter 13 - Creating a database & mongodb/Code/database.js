const { MongoClient } = require("mongodb");
require("dotenv").config(); // load .env variables

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("✅ Connected successfully to MongoDB");

  const db = client.db(dbName);
  const collection = db.collection("User");

  // 📥 Insert data
  const data = {
    firstname: "Ved",
    lastname: "Tandel",
    age: "12",
    city: "Mumbai",
  };

  const insertResult = await collection.insertMany([data]);
  console.log("✅ Data inserted successfully:", insertResult.insertedCount);

  // 🛠️ Update data
  const filter = { lastname: "Tandel" };
  const updateDocument = {
    $set: { age: "13", city: "Pune" },
  };

  const updateResult = await collection.updateOne(filter, updateDocument);
  console.log("🔄 Data updated successfully:", updateResult.modifiedCount);

  // ❌ Delete data
  const deleteQuery = { age: "12" };
  const deleteResult = await collection.deleteMany(deleteQuery);
  console.log("🗑️ Data deleted successfully:", deleteResult.deletedCount);
}

main()
  .then(() => {
    console.log("✅ Operation completed");
  })
  .catch((err) => {
    console.error("❌ Error occurred:", err);
  })
  .finally(() => {
    client.close();
  });
