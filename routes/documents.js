const express = require('express');
const router = express.Router();

const elastic = require('../elasticsearch');

router.get('/docs', (req, res, next) => {
    elastic.search().then(data => {
      res.json(data.hits.hits);
    }).catch(err => {
        console.error(err);
    })
});

router.get('/docs/:id', (req, res, next) => {
  elastic.searchById(req.params.id).then(data => {
    res.json(data);
  })
});

router.post('/docs', (req, res, next) => {
    elastic.addDocs(req.body).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.delete('/docs/:id', (req, res, next) => {
    elastic.deleteIndex(req.params.id).then(data => {
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.put('/docs/:id', (req, res, next) => {
    elastic.addDocs(req.body, req.params.id).then(data => {
      res.json(data)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;
