const express = require('express');
const mongoose = require('mongoose');

const dogRoutes = require('./routes/dogRoutes')
const walkerRoutes = require('./routes/walkerRoutes')


const app = express();

const mongouri = 'mongodb+srv://koelmann21:koelmann21@dogwalkers.g5qvlkq.mongodb.net/dog-walkers?retryWrites=true&w=majority&appName=DogWalkers';
mongoose.connect(mongouri)
    .then((result) => app.listen(8000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));


//HOMEPAGE 
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.use(dogRoutes)
app.use(walkerRoutes)


//404 Error Page 
app.use((req, res) => {
    res.status(404).render('404', {title: '404 Not Found'});
});