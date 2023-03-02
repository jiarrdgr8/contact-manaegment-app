import asyncHandler from "express-async-handler";
import contact from "../models/contactModel.js";

//@desc Get all contacts
//@route GET /api/contacts
//@access public

export const getContacts = asyncHandler(async (req, res) => {
    const contacts = await contact.find()
    res.status(200).json(contacts)
})

//@desc Create a contact
//@route GET /api/contacts
//@access public

export const createContact = asyncHandler(async (req, res) => {
    console.log('The request body is: ', req.body);
    const { name, email, phone } = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('All fields are mandatory!')
    }
    res.status(200).json({message: 'Create contact'});
})


//@desc Get a contact
//@route GET /api/contacts/:id
//@access public

export const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
})


//@desc Update a contact
//@route GET /api/contacts/:id
//@access public

export const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
})


//@desc Delete a contact
//@route GET /api/contacts/:id
//@access public

export const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
})