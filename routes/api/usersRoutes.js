const express = require('express');
const ctrlUsers = require('../../controllers/users');
const {asyncWrapper} = require('../../helpers/asyncWrapper');
const {
  usersValidation,
  updateValidation,
  authValidation,
  uploadMwr
} = require('../../middlewares');

const router = new express.Router();

router.post('/register',
    usersValidation,
    asyncWrapper(ctrlUsers.register));
router.get('/login',
    usersValidation,
    asyncWrapper(ctrlUsers.login));
router.post('/logout',
    authValidation,
    asyncWrapper(ctrlUsers.logout));
router.get('/current',
    authValidation,
    asyncWrapper(ctrlUsers.current));
router.patch('/avatar',
    authValidation,
    uploadMwr.single('avatar'),
    asyncWrapper(ctrlUsers.updateAvatar));
router.patch('/',
    authValidation,
    updateValidation,
    asyncWrapper(ctrlUsers.update));

module.exports = router;
