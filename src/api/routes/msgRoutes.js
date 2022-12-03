const express = require('express');
const msgController = require('./../controllers/msgController');


const router = express.Router();


router.route('/').post(msgController.createHash);

router.route('/:hashed').get(msgController.getMessage)

module.exports = router;