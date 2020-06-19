require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const cors = require('cors');
const compression = require('compression');
const db = require('../db/index.js');

const app = express();
const PORT = 1234;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist/`));

app.use(cors());
app.use(compression());

app.get('/', (req, res) => {
  res.send('connected').status(200);
});

app.get('/loaderio-fcf286881d57108ba58779565bbe05e9', (req, res) => {
  res.sendFile('loaderio-fcf286881d57108ba58779565bbe05e9.txt', {
    root: `${__dirname}/../`,
  });
});


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

app.get('/store/review/:id', (req, res) => {
  const { id } = req.params;
  db.getOneStoreReview(id, (result, error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(result).status(200);
    }
  });
});

app.post('/store/review', (req, res) => {
  const {
    text, starRating, userId, storeId,
  } = req.body;
  db.addOneStoreReview(storeId, userId, text, starRating, (result, error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(result).status(200);
    }
  });
});

app.put('/store/review', (req, res) => {
  const {
    id, text, starRating, userId, storeId,
  } = req.body;
  db.editOneStoreReview(id, text, starRating, userId, storeId, (result, error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(result).status(200);
    }
  });
});

app.delete('/store/review/:id', (req, res) => {
  const { id } = req.params;
  db.deleteOneStoreReview(id, (result, error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(result).status(200);
    }
  });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
