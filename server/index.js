const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const cors = require('cors');
const db = require('../db');

const app = express();
const PORT = 1234;


app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist/`));

app.use(cors());

app.get('/listing/:productNumber', (req, res) => {
  res.sendFile('index.html', {
    root: `${__dirname}/../client/dist/`,
  });
});

// get all reviews for a certain product
app.get('/product/reviews/:id', (req, res) => {
  const productId = req.params.id;
  db.getProductReviews(productId, (result, error) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result).status(200);
    }
  });
});

app.get('/product/reviews/:id/average', (req, res) => {
  const productId = req.params.id;
  db.getProductReviewsAverage(productId, (result, error) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result).status(200);
    }
  });
});

// get all reviews for a certain store
app.get('/store/reviews/:id', (req, res) => {
  const storeId = req.params.id;
  db.getStoreReviews(storeId, (result, error) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result).status(200);
    }
  });
});

app.get('/store/reviews/:id/average', (req, res) => {
  const storeId = req.params.id;
  db.getStoreReviewsAverage(storeId, (result, error) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result).status(200);
    }
  });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (result, error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(result).status(200);
    }
  });
});

app.listen(PORT, () => {
  // console.log(`listening on port ${PORT}`);
});

module.exports = app;
