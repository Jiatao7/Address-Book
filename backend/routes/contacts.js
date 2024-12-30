// Set up router
const express = require("express")
const router = express.Router()

//Import controller
const {getContacts, getContact, createContact, deleteContact, updateContact} = require("../controllers/contactController")

// GET all contacts
router.get('/', getContacts)

// GET a single contact
router.get('/:id', getContact)

// POST a new contact
router.post('/', createContact)
  
// DELETE a contact
router.delete('/:id', deleteContact)

// UPDATE a contact
router.patch('/:id', updateContact)

module.exports = router