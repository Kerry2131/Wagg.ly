const express = require('express');
const walkercontroller = require('../controllers/walkerControllers')

const router = express.Router();

//WALKER ROUTES
router.get('/walkers', walkercontroller.walker_index)
                   
router.get('/create/walker', walkercontroller.walker_create_get)

router.post('/walkers', walkercontroller.walker_create_post)

router.get('/walkers/:id', walkercontroller.walker_details) 

router.delete('/walkers/:id', walkercontroller.walker_delete)

module.exports = router; 