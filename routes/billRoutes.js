const path = require('path')
const express = require('express')
const router = express.Router()
const billList = [] // our class list array
const users=[] //save users here

/** ********************************************************************* */
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'bills', 'front-end', 'index.html'))
})

router.get('/api/list', function (req, res) {
  res.json(billList) // Respond with JSON
})
router.get('/api/users', function (req, res) {
  res.json(users) // Respond with JSON
})
router.get('/api/create', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'bills', 'back-end', 'create.html'))
})
router.get('/api/login', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'bills', 'back-end', 'log-user.html'))
})

router.post('/api/login', function (req, res) {
  console.log(`Adding users name: ${req.body.resource} `)
  users.push(req.body.resource)
  res.redirect(req.baseUrl + '/')
})

router.post('/api/create', function (req, res) {
  if (isNaN(req.body.price)) throw 'The price should be in numbers'
  console.log(`Adding this resorce: ${req.body.resource} at this cost: R${req.body.price}`)

  var bill = {
    resource: req.body.resource,
    price: req.body.price
  }
  billList.push(bill)

  res.redirect(req.baseUrl + '/')
})

router.get('/api/delete', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'bills', 'back-end', 'delete.html'))
})

router.post('/api/delete', function (req, res) {
  if (!isNaN(req.body.id) && req.body.id <= billList.length && billList.length > 0 && req.body.id > 0) {
    console.log('Deleting a resource: ', billList[req.body.id - 1].resource)
    billList.splice(req.body.id - 1, 1)
  }
  res.redirect(req.baseUrl + '/')
})

router.get('/api/edit', function (req, res) {
  res.sendFile(path.join(__dirname, '../views', 'bills', 'back-end', 'edit.html'))
})

router.post('/api/edit', function (req, res) {
  if (isNaN(req.body.price)) throw 'The price should be in numbers'
  if (req.body.id <= billList.length && !isNaN(req.body.id) && req.body.id > 0) {
    if (req.body.price > 0) {
      console.log(`Editing this resorce: ${billList[req.body.id - 1].resource} to this cost: R${req.body.price}`)
      billList[req.body.id - 1].price = req.body.price
    }

    if (req.body.resource.length > 0) {
      console.log(`Editing this resorce: ${billList[req.body.id - 1].resource} to this resorce: R${req.body.resource}`)
      billList[req.body.id - 1].resource = req.body.resource
    }
  }
  res.redirect(req.baseUrl + '/')
})

module.exports = router
