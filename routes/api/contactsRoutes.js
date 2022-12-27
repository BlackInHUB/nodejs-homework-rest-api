const express = require('express');
const {contactValidation} = require('../../middlewares/contactsValidation');

const ctrlContacts = require('../../controllers/contacts');
const {asyncWrapper} = require('../../helpers/asyncWrapper');
const {authValidation} = require('../../middlewares/authValidation');

const router = new express.Router();

router.get('/',
    authValidation,
    asyncWrapper(ctrlContacts.get));
router.get('/:contactId',
    authValidation,
    asyncWrapper(ctrlContacts.getById));
router.post('/',
    authValidation,
    contactValidation,
    asyncWrapper(ctrlContacts.add));
router.put('/:contactId',
    authValidation,
    contactValidation,
    asyncWrapper(ctrlContacts.update));
router.patch('/:contactId/favorite',
    authValidation,
    asyncWrapper(ctrlContacts.updateStatus));
router.delete('/:contactId',
    authValidation,
    asyncWrapper(ctrlContacts.remove));

module.exports = router;
