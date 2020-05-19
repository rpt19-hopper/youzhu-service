const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  // your code here
  id: Number,
  avatar: String,
  userName: String,
});

const storesSchema = new mongoose.Schema({
  // your code here
  id: Number,
  name: String,
});

const productReviewsSchema = new mongoose.Schema({
  // your code here
  id: Number,
  text: String,
  ts: Date,
  dt: Date,
  star_rating: Number,
  user_id: Number,
  product_id: Number,
  store_id: Number,
});

const storeReviewsSchema = new mongoose.Schema({
  // your code here
  id: Number,
  text: String,
  star_rating: Number,
  user_id: Number,
  store_id: Number,
});

const Users = mongoose.model('Users', usersSchema);
const Stores = mongoose.model('Stores', storesSchema);
const ProductReviews = mongoose.model('ProductReviews', productReviewsSchema);
const StoreReviews = mongoose.model('StoreReviews', storeReviewsSchema);

module.exports = {
  Users,
  Stores,
  ProductReviews,
  StoreReviews,
};
