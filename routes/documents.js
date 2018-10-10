const express = require('express');
const router = express.Router();

const elastic = require('../elasticsearch');

router.get('/docs', (req, res, next) => {
    elastic.search().then(data => {
      res.status(200).json(data.hits.hits);
    }).catch(err => {
        console.error(err);
        res.status(500).json(err)
    })
});

router.get('/docs/:id', (req, res, next) => {
  elastic.searchById(req.params.id).then(data => {
    res.status(200).json(data);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/docs', (req, res, next) => {
    elastic.addDocs(req.body).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
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
      res.status(200).json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
