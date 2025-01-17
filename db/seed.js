/* eslint-disable camelcase */
const { loremIpsum } = require('lorem-ipsum');
const faker = require('faker/locale/de');
const fs = require('fs');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// write user csv
// const writeUsers = fs.createWriteStream('./db/data/user.csv');
// writeUsers.write('id, avatar, username\n', 'utf8');

// function writeTenMillionUsers(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const username = faker.internet.userName();
//       const avatar = faker.image.avatar();
//       const data = `${id},${avatar},${username}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeTenMillionUsers(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

// // write store csv
// const writeStores = fs.createWriteStream('./db/data/store.csv');
// writeStores.write('id, name\n', 'utf8');

// function writeTenMillionStores(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const name = faker.fake('{{name.lastName}}');
//       const data = `${id},${name}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeTenMillionStores(writeStores, 'utf-8', () => {
//   writeStores.end();
// });

// // write store product relations csv
// const writeStoreProduct = fs.createWriteStream('./db/data/store_product.csv');
// writeStoreProduct.write('id, name\n', 'utf8');

// function writeTenMillionStoreProduct(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const store_id = Math.ceil(Math.random() * 1000000);
//       const data = `${id},${store_id}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeTenMillionStoreProduct(writeStoreProduct, 'utf-8', () => {
//   writeStoreProduct.end();
// });

// write productReview csv
const writeProductReviews2 = fs.createWriteStream('./db/data/productReview2.csv');
writeProductReviews2.write('id, text, ts, dt, star_rating, user_id, product_id, store_id \n', 'utf8');

function writeTenMillionProductReviews2(writer, encoding, callback) {
  let i = 10000000;
  let id = 10000000;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const text = loremIpsum({
        count: 1,
        format: 'plain',
        sentenceLowerBound: 5,
        sentenceUpperBound: 10,
        units: 'sentences',
      });
      const dt = '2020-05-01';
      const star_rating = Math.ceil(Math.random()) * 5;
      const user_id = Math.ceil(Math.random() * 1000000);
      const product_id = Math.ceil(Math.random() * 10000000);
      const data = `${id},${text},${dt},${star_rating},${user_id},${product_id}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionProductReviews2(writeProductReviews2, 'utf-8', () => {
  writeProductReviews2.end();
});

// write storeReview csv
// const writeStoreReviews = fs.createWriteStream('./db/data/storeReview.csv');
// writeStoreReviews.write('id, text, star_rating, user_id, store_id \n', 'utf8');

// function writeSeventyMillionStoreReviews(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const text = loremIpsum({
//         count: 1,
// 	      format: 'plain',
// 	      sentenceLowerBound: 5,
// 	      sentenceUpperBound: 10,
// 	      units: 'sentences',
// 	    });
//       const star_rating = Math.ceil(Math.random()) * 5;
//       const user_id = Math.ceil(Math.random() * 1000000);
//       const store_id = Math.ceil(Math.random() * 1000000);
//       const data = `${id},${text},${star_rating},${user_id},${store_id}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeSeventyMillionStoreReviews(writeStoreReviews, 'utf-8', () => {
//   writeStoreReviews.end();
// });

