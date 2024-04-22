const Dog = require('../models/dogs');

const dog_index = (req, res) => {
    Dog.find().sort({ createdAt: -1})
    .then(result => {
        res.render('Dogs/dogs', {title: 'All Dogs', dogs: result} )
      })
      .catch(err => {
        console.log(err);
      });
}

const dog_details = (req, res) => {
    const id = req.params.id;
    Dog.findById(id)
    .then(result => {
        res.render('Dogs/dogdetails', {dogs: result, title: 'Dog Details'} );
      })
      .catch(err => {
        res.render('404', {title: 'Page Not Found'})
      });
}

const dog_create_get = (req, res) => {
    res.render('Dogs/createdog', {title: 'Register a Dog'});
}

const dog_create_post = (req, res) => {
    const newdog = new Dog(req.body);

    newdog.save()
    .then(result => {
        res.redirect('/dogs');
      })
      .catch(err => {
        console.log(err);
      });
}

const dog_delete = (req, res) => {
    const id = req.params.id;

    Dog.findByIdAndDelete(id)
    .then(result => {
        res.json( { redirect: '/dogs' })
    })
    .catch(err => {
        console.log(err);
      }); 
}
 
module.exports ={
    dog_index,
    dog_details,
    dog_create_get,
    dog_create_post,
    dog_delete,
}