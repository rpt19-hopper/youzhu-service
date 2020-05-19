const mysql = require('mysql');
//const path = require('path');
const fs = require('fs');
const fastcsv = require('fast-csv');
//const csvParser = require('csv-parse');
const mysqlConfig = require('./config.js');
//const seed = require('./seed.js');

const inputParams = {
  files: ['./db/data/user.csv', './db/data/store.csv', './db/data/productReview.csv', './db/data/storeReview.csv'],
  queries: ['INSERT INTO etsy.users (id, avatar, username) VALUES ?',
    'INSERT INTO etsy.stores (id, name) VALUES ?',
    'INSERT INTO etsy.product_reviews (id, text, ts, dt, star_rating, user_id, product_id, store_id) VALUES ?',
    'INSERT INTO etsy.store_reviews (id, text, star_rating, user_id, store_id) VALUES ?'],
};

const connection = mysql.createConnection(mysqlConfig);
connection.connect();


// seed users table
// const stream = fs.createReadStream(inputParams.files[0]);
// const csvData = [];
// const csvStream = fastcsv
//   .parse()
//   .on('data', (data) => {
//     csvData.push(data);
//   })
//   .on('end', () => {
//     csvData.shift();
//     const query = inputParams.queries[0];
//     connection.query(query, [csvData], (error, response) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('file loaded', response);
//       }
//     });
//   });
// stream.pipe(csvStream);

// seed stores table

// const stream1 = fs.createReadStream(inputParams.files[1]);
// const csvData1 = [];
// const csvStream1 = fastcsv
//   .parse()
//   .on('data', (data) => {
//     csvData1.push(data);
//   })
//   .on('end', () => {
//     csvData1.shift();
//     const query = inputParams.queries[1];
//     connection.query(query, [csvData1], (error, response) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('file loaded', response);
//       }
//     });
//   });
//stream1.pipe(csvStream1);

//seed product_reviews table

// const stream2 = fs.createReadStream(inputParams.files[2]);
// const csvData2 = [];
// const csvStream2 = fastcsv
//   .parse()
//   .on('data', (data) => {
//     csvData2.push(data);
//   })
//   .on('end', () => {
//     csvData2.shift();
//     const query = inputParams.queries[2];
//     connection.query(query, [csvData2], (error, response) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('file loaded', response);
//       }
//     });
//   });
// stream2.pipe(csvStream2);

//seed store_reivews table

const stream3 = fs.createReadStream(inputParams.files[3]);
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