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
