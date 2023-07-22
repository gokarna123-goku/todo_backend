import mongoose from "mongoose";

const Connection = () => {
  const MONGODB_URI =
    "mongodb+srv://logi2065:Logi2065123@cluster0.wdixa4s.mongodb.net/?retryWrites=true&w=majority";

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected successfully");
  });

  mongoose.connection.on("error", () => {
    console.log("Error occured while connecting database", error.message);
  });
};

export default Connection;
