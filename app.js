const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./model/listing");

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Dev_Akshat");
}

app.get("/testListing", async (req,res)=>{
     let sampleListing = new Listing({
        title:"My PRo space",
        description: "Blue in color",
        price:20000,
        location: "Haldwani",
        country:"India"
     });

     await sampleListing.save();
     console.log("sample listing saved ");
     res.send("successful")
})

app.get("/", (req, res) => {
  res.send("Hi, I'm Akshat");
});

app.listen(port, () => {
  console.log("server is working absolutely fine (@Programmer)");
});
