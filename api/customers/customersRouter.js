const express = require("express");

// database access using knex
const db = require("../../data/dbConfig"); // dbconfig is PostgreSQL Knex file

const router = express.Router();

router.get('/', (req, res) => { // GET - all customers
  db('customers')
    .then(posts => {
      res.status(200).json({ data: posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
})

router.get('/:id', (req, res) => { // GET - customers by ID
  db('customers')
  .where({ customer_id: req.params.id })
  .first()
    .then(posts => {
      res.status(200).json({ data: posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
})

router.post('/', (req, res) => { // POST - Create customers
  const newCustomers = req.body;
  db('customers')
  .insert(newCustomers, 'id')
    .then(ids => {
      const id = ids[0]
      db('customers')
      .where({ id })
      .first()
      .then( customers => {
        res.status(200).json({ data: customers });
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
})

router.put('/:id', (req, res) => { // PUT - Edit an customers by ID
  const { id } = req.params
  const edits = req.body;
  db('customers').where({ id }).update(edits)
  .then(customers => {
    if(customers) {
      res.status(201).json({ message: `customers was successfully updated.` })
    } else {
      res.status(404).json({ message: `no customers with selected id.` })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ errorMessage: err.message });
  });
})

router.delete('/:id', (req, res) => { // PUT - Edit an customers by ID
  const { id } = req.params
  db('customers').where({ id }).del()
  .then(customers => {
    if(customers) {
      res.status(201).json({ message: `customers was deleted.` })
    } else {
      res.status(404).json({ message: `no customers with selected id.` })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ errorMessage: err.message });
  });
})  

module.exports = router;