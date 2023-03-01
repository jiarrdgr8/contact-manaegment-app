//@desc Get all contacts
//@route GET /api/contacts
//@access public

export const getContacts = (req, res) => {
    res.status(200).json({message: 'Get all contacts'})
};

//@desc Create a contact
//@route GET /api/contacts
//@access public

export const createContact = (req, res) => {
    console.log('The request body is: ', req.body);
    const { name, email, phone } = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('All fields are mandatory!')
    }
    res.status(200).json({message: 'Create contact'});
}


//@desc Get a contact
//@route GET /api/contacts/:id
//@access public

export const getContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
}


//@desc Update a contact
//@route GET /api/contacts/:id
//@access public

export const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
}


//@desc Delete a contact
//@route GET /api/contacts/:id
//@access public

export const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
};