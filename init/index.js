const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../model/listing");


main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Dev_Akshat");
}

const initDB= async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was initilized");
}

initDB();