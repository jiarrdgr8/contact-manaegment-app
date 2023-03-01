import express from 'express';
const router = express.Router();
import { getContacts, createContact, getContact, updateContact, deleteContact } from '../controllers/contactController.js';

router.get('/', getContacts);

router.post('/', createContact);

router.get('/:id', getContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

export default router;
