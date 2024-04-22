const express = require('express');
const dogcontroller = require('../controllers/dogControllers')

const router = express.Router();

//DOG ROUTES 
router.get('/dogs', dogcontroller.dog_index);

router.get('/create/dog', dogcontroller.dog_create_get);

router.post('/dogs', dogcontroller.dog_create_post);

router.get('/dogs/:id', dogcontroller.dog_details);

router.delete('/dogs/:id', dogcontroller.dog_delete);

module.exports = router;  