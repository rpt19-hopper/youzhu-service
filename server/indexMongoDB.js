const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const cors = require('cors');
const compression = require('compression');

const app = express();
const PORT = 4321;

const db = require('../db/indexMongoDB.js');
const Reviews = require('../db/models/Reviews.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist/`));

app.use(cors());
app.use(compression());

app.get('/store/review/:id', (req, res) => {
  const { id } = req.params;
  db.getOneStoreReviewMongo(id, (result, error) => {
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
  db.addOneStoreReviewMongo(storeId, userId, text, starRating, (result, error) => {
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
  db.editOneStoreReviewMongo(id, text, starRating, userId, storeId, (result, error) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(result).status(200);
    }
  });
});

app.delete('/store/review/:id', (req, res) => {
  const { id } = req.params;
  db.deleteOneStoreReviewMongo(id, (result, error) => {
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