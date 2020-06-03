const mysql = require('mysql');
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const fastcsv = require('fast-csv');
// eslint-disable-next-line import/no-unresolved
const mysqlConfig = require('./config.js');

const inputParams = {
  file: './db/data/user.csv',
  query: 'INSERT INTO etsy.users (id, avatar, username) VALUES ?',
};

const connection = mysql.createConnection(mysqlConfig);
connection.connect();

// seed users table
const stream = fs.createReadStream(inputParams.file);
const csvData = [];
const csvStream = fastcsv
  .parse()
  .on('data', (data) => {
    csvData.push(data);
  })
  .on('end', () => {
    csvData.shift();
    const { query } = inputParams;
    connection.query(query, [csvData], (error, response) => {
      if (error) {
        throw error;
      } else {
        console.log('file loaded', response);
      }
    });
  });
stream.pipe(csvStream);
