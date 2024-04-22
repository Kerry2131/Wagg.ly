const Walker = require('../models/walkers');

const walker_index = (req, res) => {
    Walker.find().sort({ createdAt: -1})
    .then(result => {
        res.render('Walkers/walkers', {title: 'All Walker', walkers: result} )
      })
      .catch(err => {
        console.log(err);
      });
}

const walker_details = (req, res) => {
    const wid = req.params.id;
    Walker.findById(wid)
    .then(result => {
        res.render('Walkers/walkerdetails', {walkers: result, title: 'Walker Details'} );
      })
      .catch(err => {
        res.render('404', {title: 'Page Not Found'})
      });

}

const walker_create_get = (req, res) => {
    res.render('Walkers/createwalker', {title: 'Register a Walker'});
}

const walker_create_post = (req, res) => {
    const newwalker = new Walker(req.body);

    newwalker.save()
    .then(result => {
        res.redirect('/walkers');
      })
      .catch(err => {
        console.log(err);
      });

}

const walker_delete = (req, res) => {
    const id = req.params.id;

    Walker.findByIdAndDelete(id)
    .then(result => {
        res.json( { redirect: '/walkers' })
    })
    .catch(err => {
        console.log(err);
      }); 

}

module.exports ={
    walker_index,
    walker_details,
    walker_create_get,
    walker_create_post,
    walker_delete,
}