import mongoose from "mongoose";

const mongodbUri: any = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongodbUri);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
