import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";


//@desc Get all contacts
//@route GET /api/contacts
//@access private

export const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts)
})


//@desc Create a contact
//@route GET /api/contacts
//@access private

export const createContact = asyncHandler(async (req, res) => {
    console.log('The request body is: ', req.body);
    const { name, email, phone } = req.body
    if(!name || !email || !phone){
        res.status(400).json('All fields are mandatory!')
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    })

    res.status(200).json('Create contact success');
})


//@desc Get a contact
//@route GET /api/contacts/:id
//@access private

export const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404).json('Contact does not exist.')
    }

    res.status(200).json(contact);
})


//@desc Update a contact
//@route GET /api/contacts/:id
//@access private

export const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404).json('Contact does not exist.')
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error('User not authozirized to update this contact.')
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
//@access private

export const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(400).json('Contact does not exist.')
    }
    
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error('User not authozirized to delete this contact.')
    }

    await Contact.findByIdAndRemove(req.params.id)
    res.status(200).json('Contact deleted.');
})