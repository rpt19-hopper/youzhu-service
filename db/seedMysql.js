const mysql = require('mysql');
const fs = require('fs');
const fastcsv = require('fast-csv');
const mysqlConfig = require('./config.js');

const inputParams = {
  files: ['./db/data/user.csv', './db/data/store.csv', './db/data/storeReview.csv'],
  productReviewFiles: ['./db/data/productReview.csv', './db/data/productReview2.csv', './db/data/productReview3.csv', './db/data/productReview4.csv', './db/data/productReview5.csv', './db/data/productReview6.csv', './db/data/productReview7.csv'],
  queries: ['INSERT INTO etsy.users (id, avatar, username) VALUES ?',
    'INSERT INTO etsy.stores (id, name) VALUES ?',
    'INSERT INTO etsy.product_reviews (id, text, ts, dt, star_rating, user_id, product_id, store_id) VALUES ?',
    'INSERT INTO etsy.store_reviews (id, text, star_rating, user_id, store_id) VALUES ?'],
};

const connection = mysql.createConnection(mysqlConfig);
connection.connect();


// seed users table
const stream = fs.createReadStream(inputParams.files[0]);
const csvData = [];
const csvStream = fastcsv
  .parse()
  .on('data', (data) => {
    csvData.push(data);
  })
  .on('end', () => {
    csvData.shift();
    const query = inputParams.queries[0];
    connection.query(query, [csvData], (error, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('file loaded', response);
      }
    });
  });
stream.pipe(csvStream);

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

//seed product_reviews table

const stream2 = fs.createReadStream(inputParams.productReviewFiles[0]);
const csvData2 = [];
const csvStream2 = fastcsv
  .parse()
  .on('data', (data) => {
    csvData2.push(data);
  })
  .on('end', () => {
    csvData2.shift();
    const query = inputParams.queries[2];
    connection.query(query, [csvData2], (error, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('file loaded', response);
      }
    });
  });
stream2.pipe(csvStream2);

//seed store_reivews table

const stream3 = fs.createReadStream(inputParams.files[2]);
const csvData3 = [];
const csvStream3 = fastcsv
  .parse()
  .on('data', (data) => {
    csvData3.push(data);
  })
  .on('end', () => {
    csvData3.shift();
    const query = inputParams.queries[3];
    connection.query(query, [csvData3], (error, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('file loaded', response);
      }
    });
  });
stream3.pipe(csvStream3);

////////////////// seed additional product reviews ///////////////////////

// const productReviewStream2 = fs.createReadStream(inputParams.productReviewFiles[1]);
// const productReviewCsvData2 = [];
// const productReviewcsvStream2 = fastcsv
//   .parse()
//   .on('data', (data) => {
//     productReviewCsvData2.push(data);
//   })
//   .on('end', () => {
//     productReviewCsvData2.shift();
//     const query = inputParams.queries[2];
//     connection.query(query, [productReviewCsvData2], (error, response) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('file loaded', response);
//       }
//     });
//   });
// productReviewStream2.pipe(productReviewcsvStream2);

// const productReviewStream3 = fs.createReadStream(inputParams.productReviewFiles[2]);
// const productReviewCsvData3 = [];
// const productReviewcsvStream3 = fastcsv
//   .parse()
//   .on('data', (data) => {
//     productReviewCsvData3.push(data);
//   })
//   .on('end', () => {
//     productReviewCsvData3.shift();
//     const query = inputParams.queries[2];
//     connection.query(query, [productReviewCsvData3], (error, response) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('file loaded', response);
//       }
//     });
//   });
// productReviewStream3.pipe(productReviewcsvStream3);
