// db.js

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    setTimeout(connectDB, 1000); // Retry connection after 1 second
  }
};

module.exports = connectDB;


// const mongoose=require('mongoose')



// const mongoURL= 'mongodb://127.0.0.1:27017/students'
// const mongoURL2='mongodb+srv://jagjeetjaiswal027:jasus123@cluster0.13wok3r.mongodb.net/'


// // //--------------------------to estabilish the connecction------------------------------------

// mongoose.connect(mongoURL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

// const db=mongoose.connection;

// db.on('connect',()=>{
//     console.log('connected to db server')

// })

// db.on('error',()=>{
//     console.log('error in db connection')
// })

// db.on('disconnect',()=>{
//     console.log('disconnected from db');

// })


// module.exports=connectDb;



// // // const mongoose = require("mongoose")

// // // try {
// // //     mongoose.connect("mongodb+srv://jag:jag@cluster0.rb9vfj8.mongodb.net/")
// // // } catch (error) {
    
// // // // }
// // module.exports = connectDB;




// const mongoose = require('mongoose');
// require('dotenv').config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     // wait 1 second before retrying
//     setTimeout(connectDB, 1000);
//   }
// };

// module.exports = connectDB;