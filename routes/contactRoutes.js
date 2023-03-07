import express from 'express';
const router = express.Router();
import { getContacts, createContact, getContact, updateContact, deleteContact } from '../controllers/contactController.js';
import { validateToken } from '../middleware/validateTokenHandler.js';


router.use(validateToken)

router.get('/', getContacts);

router.post('/', createContact);

router.get('/:id', getContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

export default router;
