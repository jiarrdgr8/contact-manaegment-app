import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";


//@desc Get all contacts
//@route GET /api/contacts
//@access public

export const getContacts = async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
}


//@desc Create a contact
//@route GET /api/contacts
//@access public

export const createContact = asyncHandler(async (req, res) => {
    console.log('The request body is: ', req.body);
    const { name, email, phone } = req.body
    if(!name || !email || !phone){
        res.status(400).json('All fields are mandatory!')
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })

    res.status(200).json('Create contact success');
})


//@desc Get a contact
//@route GET /api/contacts/:id
//@access public

export const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404).json('Contact does not exist.')
    }

    res.status(200).json(contact);
})


//@desc Update a contact
//@route GET /api/contacts/:id
//@access public

export const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404).json('Contact does not exist.')
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        res.status(200).json(updatedContact);
})


//@desc Delete a contact
//@route GET /api/contacts/:id
//@access public

export const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(400).json('Contact does not exist.')
    }
    
    await Contact.findByIdAndRemove(req.params.id)
    res.status(200).json('Contact deleted.');
})