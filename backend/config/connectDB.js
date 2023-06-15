const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
} 

module.exports = connectDB

// you can also use this to connect to mongoDB and start thr server 

// const startServer = async () => {
  //     try {
  //         await connectDB();
  //         app.listen(PORT, () => {
  //             console.log(`server running on port ${PORT}`);
  //         });
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  // startServer();