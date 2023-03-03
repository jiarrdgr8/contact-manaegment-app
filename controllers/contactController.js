import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

//@desc Get all contacts
//@route GET /api/contacts
//@access public

export const getContacts = async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
}

// export const getContacts = asyncHandler(async (req, res) => {
//     const page = req.query.page || 1;
//     const perPage = 10;
//     const contacts = await Contact.find()
//                                  .skip((page - 1) * perPage)
//                                  .limit(perPage);
//     res.status(200).json(contacts);
// });

//@desc Create a contact
//@route GET /api/contacts
//@access public

export const createContact = async (req, res) => {
    console.log('The request body is: ', req.body);
    const { name, email, phone } = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('All fields are mandatory!')
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })

    res.status(200).json('create contact success');
}


//@desc Get a contact
//@route GET /api/contacts/:id
//@access public

export const getContact = async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    res.status(200).json(contact);
}


//@desc Update a contact
//@route GET /api/contacts/:id
//@access public

export const updateContact = async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
}


//@desc Delete a contact
//@route GET /api/contacts/:id
//@access public

export const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
})