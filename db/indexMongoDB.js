const mongoose = require('mongoose');
const reviews = require('./models/Reviews.js');

const mongoURI = 'mongodb://localhost:27017/etsy';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then((db) => console.log(`Connected to: ${mongoURI}`))
  .catch((err) => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
  });


const getOneStoreReviewMongo = (id, callback) => {
  reviews.StoreReviews.find({ id }, (err, review) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, review);
    }
  });
};

const addOneStoreReviewMongo = (storeId, userId, text, starRating, callback) => {
  const review = new reviews.StoreReviews({
    id: storeId, text, star_rating: starRating, user_id: userId,
  });
  review.save((err, newReview) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, newReview);
    }
  });
};

const editOneStoreReviewMongo = (id, text, starRating, userId, storeId, callback) => {
  const filter = { id };
  const update = {
    id: storeId, text, star_rating: starRating, user_id: userId,
  };
  const review = new reviews.StoreReviews(update);

  reviews.StoreReviews.findOneAndDelete(filter, (err, oldReview) => {
    if (err) {
      callback(err, null);
    } else {
      review.save(update, (error, newReview) => {
        if (error) callback(error, null);
        callback(null, newReview);
      });
    }
  });
};

const deleteOneStoreReviewMongo = (id, callback) => {
  const filter = { id };

  reviews.StoreReviews.findOneAndDelete(filter, (err, oldReview) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, oldReview);
    }
  });
};


module.exports = {
  db,
  getOneStoreReviewMongo,
  addOneStoreReviewMongo,
  editOneStoreReviewMongo,
  deleteOneStoreReviewMongo,
};
