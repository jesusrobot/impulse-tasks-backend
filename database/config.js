import mongoose from "mongoose";
const { connect } = mongoose;

const databaseConnection = async () => {
  try {
    const options = { useNewUrlParser: true, useUnifiedTopology: false };
    const db = await connect(process.env.MONGO_CONNECTION_STR, options);
    const name = db.connection.name;
    console.log("🥞 Connectado con la base de datos:", name);
  } catch (error) {
    console.log(error);
    throw new Error("❌ A ocurrido un error al conectar con la base de datos");
  }
};

export default databaseConnection;
