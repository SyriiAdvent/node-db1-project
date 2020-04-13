const express = require("express");

// database access using knex
const db = require("../../data/dbConfig2"); // dbconfig2 is sqlite3 Knex file

const router = express.Router();

router.get('/', (req, res) => { // GET - all acounts
  db('accounts')
    .then(posts => {
      res.status(200).json({ data: posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
})

router.get('/:id', (req, res) => { // GET - account by ID
  const { id } = req.params
  db('accounts')
  .where({ id })
  .first()
    .then(posts => {
      res.status(200).json({ data: posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
})

router.post('/', (req, res) => { // POST - Create account
  const newAccount = req.body;
  db('accounts')
  .insert(newAccount, 'id')
    .then(ids => {
      const id = ids[0]
      db('accounts')
      .where({ id })
      .first()
      .then( account => {
        res.status(200).json({ data: account });
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
})

router.put('/:id', (req, res) => { // PUT - Edit an account by ID
  const { id } = req.params
  const edits = req.body;
  db('accounts').where({ id }).update(edits)
  .then(account => {
    if(account) {
      res.status(201).json({ message: `account was successfully updated.` })
    } else {
      res.status(404).json({ message: `no account with selected id.` })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ errorMessage: err.message });
  });
})

router.delete('/:id', (req, res) => { // PUT - Edit an account by ID
  const { id } = req.params
  db('accounts').where({ id }).del()
  .then(account => {
    if(account) {
      res.status(201).json({ message: `account was deleted.` })
    } else {
      res.status(404).json({ message: `no account with selected id.` })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ errorMessage: err.message });
  });
})  

module.exports = router;