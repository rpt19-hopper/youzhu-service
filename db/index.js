/* eslint-disable func-names */
const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect();


const getProductReviews = function (productId, callback) {
  connection.query(`SELECT * FROM product_reviews WHERE product_id=${productId}`, (error, results) => {
    if (error) {
      callback(null, error);
    } else {
      callback(results, null);
    }
  });
};

const getProductReviewsAverage = function (productId, callback) {
  connection.query(`SELECT product_id, AVG(star_rating) FROM product_reviews WHERE product_id=${productId}`, (error, results) => {
    if (error) {
      callback(null, error);
    } else {
      callback(results, null);
    }
  });
};

const getStoreReviewsAverage = function (storeId, callback) {
  connection.query(`SELECT store_id, AVG(star_rating) FROM store_reviews WHERE store_id=${storeId}`, (error, results) => {
    if (error) {
      callback(null, error);
    } else {
      callback(results, null);
    }
  });
};

const getStoreReviews = function (storeId, callback) {
  connection.query(`SELECT * FROM store_reviews WHERE store_id=${storeId}`, (error, results) => {
    if (error) {
      callback(null, error);
    } else {
      callback(results, null);
    }
  });
};

const getUser = function (userId, callback) {
  connection.query(`SELECT * FROM users WHERE id=${userId}`, (error, results) => {
    if (error) {
      callback(null, error);
    } else {
      callback(results, null);
    }
  });
};

const getOneStoreReview = function (id, callback) {
  connection.query(`SELECT * FROM store_reviews WHERE id=${id}`, (error, results) => {
    if (error) {
      callback(null, error);
    } else {
      callback(results, null);
    }
  });
};

const addOneStoreReview = function (storeId, userId, text, starRating, callback) {
  const sql = `INSERT INTO store_reviews (id,text,star_rating,user_id,store_id) VALUES (default,'${text}','${starRating}','${userId}','${storeId}');`;
  connection.query(sql, (error, results) => {
    if (error) {
      callback(null, error);
    } else {
      callback(results, null);
    }
  });
};

const editOneStoreReview = function (id, text, starRating, userId, storeId, callback) {
  const sql = `
  UPDATE store_reviews 
  SET 
      text = '${text}',
      star_rating = '${starRating}',
      user_id = '${userId}',
      store_id = '${storeId}'
  WHERE
      id=${id};`;
  connection.query(sql, (error, results) => {
    if (error) {
      callback(null, error);
    } else {
      callback(results, null);
    }
  });
};

const deleteOneStoreReview = function (id, callback) {
  const sql = `DELETE FROM store_reviews WHERE id=${id};`;
  connection.query(sql, (error, results) => {
    if (error) {
      callback(null, error);
    } else {
      callback(results, null);
    }
  });
};

module.exports = {
  getProductReviews,
  getStoreReviews,
  getUser,
  getProductReviewsAverage,
  getStoreReviewsAverage,
  getOneStoreReview,
  addOneStoreReview,
  editOneStoreReview,
  deleteOneStoreReview,
  connection,
};
