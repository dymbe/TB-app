var ObjectID = require('mongodb').ObjectID

//CRUD OPERATONS FOR THE DATABASE
module.exports = function(app, db) {


  //GET: fetch record from DB.
  app.get('/tb_app/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.db().collection('tb_app').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(item); //Returns the object
      }
    });
  });
  //DELETE: remove record from DB
  app.delete('/tb_app/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.db().collection('tb_app').remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send('Note ' + id + ' deleted!'); //Static info message
      }
    });
  });
  //PUT: Updates record in DB.
  app.put('/tb_app/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const message = { title: req.body.title, text: req.body.content }
    db.db().collection('tb_app').update(details, message,  (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(item); //Updates the object
      }
    });
  });
  //POST: write to the DB.
  app.post('/tb_app', (req, res) => {
    //Store POST content message
    const message = { title: req.body.title, text: req.body.content }
    //Insert message in DB
    db.db().collection('tb_app').insertOne(message, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(result.ops[0]); //Store 1st element of result, which is the content
      }
    });
  });

}
