// Imports
const Contact = require('../models/contactModel')
const mongoose = require('mongoose')

// GET all contacts
const getContacts = async (req, res) => {
    const contacts = await Contact.find().sort({name: 1})
    res.status(200).json(contacts)
}

// GET a single contact
const getContact = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }    
    const contact = await Contact.findById(id)
    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }
    res.status(200).json(contact)
}

// POST a new contact
createContact = async (req, res) => {
    const contactData = req.body
    try {
        const contact = await Contact.create(contactData)
        res.status(200).json(contact)
    } catch(error) {
        console.log(error)
    }
}
  
// DELETE a contact
deleteContact = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }    
    const contact = await Contact.findByIdAndDelete(id)
    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }
    res.status(200).json(contact)
}

// UPDATE a contact
updateContact = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }    

    //Update contact
    const contactData = req.body
    const contact = await Contact.findByIdAndUpdate(id, contactData, {new: true})

    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }
    res.status(200).json(contact)
}

module.exports = {getContacts, getContact, createContact, deleteContact, updateContact}