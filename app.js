const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const Listing = require("./model/listing");
const path = require("path");
const { url } = require("inspector");

main()
.then(() => {
  console.log("Connected to DB");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Dev_Akshat");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});


//New Route (@programmer);

app.get("/listings/new",(req,res)=>{
  res.render("listings/new.ejs")
});


//Show route (@programmer);

app.get("/listings/:id",async(req,res)=>{
  let {id}=req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs",{listing});

});

//Create Route (@programmer);
app.post("/listings",async (req,res)=>{
  // let {title, description, image, price, country, location}=req.body;
  const newListing= new Listing(req.body.listing)
  await newListing.save();
  res.redirect("/listings");
  console.log(newListing);
});


// app.get("/testListing", async (req,res)=>{
//      let sampleListing = new Listing({
//         title:"My PRo space",
//         description: "Blue in color",
//         price:20000,
//         location: "Haldwani",
//         country:"India"
//      });

//      await sampleListing.save();
//      console.log("sample listing saved ");
//      res.send("successful")
// })

app.get("/", (req, res) => {
  res.send("Hi, I'm Akshat");
});

app.listen(port, () => {
  console.log("server is working absolutely fine (@Programmer)");
});
