const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:"https://unsplash.com/photos/a-camera-attached-to-a-jacket-with-a-strap-K3zm4aFrR_s",
    set: (v) => (v === " " ? "https://unsplash.com/photos/a-camera-attached-to-a-jacket-with-a-strap-K3zm4aFrR_s" : v),
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
