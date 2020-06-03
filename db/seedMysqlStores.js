const mysql = require('mysql');
const fs = require('fs');
const fastcsv = require('fast-csv');
const mysqlConfig = require('./config.js');

let inputParams = {
  files: ['./db/data/user.csv', './db/data/store.csv', './db/data/storeReview.csv'],
  productReviewFiles: ['./db/data/productReview.csv', './db/data/productReview2.csv', './db/data/productReview3.csv', './db/data/productReview4.csv', './db/data/productReview5.csv', './db/data/productReview6.csv', './db/data/productReview7.csv'],
  queries: ['INSERT INTO etsy.users (id, avatar, username) VALUES ?',
    'INSERT INTO etsy.stores (id, name) VALUES ?',
    'INSERT INTO etsy.product_reviews (id, text, ts, dt, star_rating, user_id, product_id, store_id) VALUES ?',
    'INSERT INTO etsy.store_reviews (id, text, star_rating, user_id, store_id) VALUES ?'],
};

const connection = mysql.createConnection(mysqlConfig);
connection.connect();

// seed stores table

const stream1 = fs.createReadStream(inputParams.files[1]);
const csvData1 = [];
const csvStream1 = fastcsv
  .parse()
  .on('data', (data) => {
    csvData1.push(data);
  })
  .on('end', () => {
    csvData1.shift();
    const query = inputParams.queries[1];
    connection.query(query, [csvData1], (error, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('file loaded', response);
      }
    });
  });
stream1.pipe(csvStream1);
