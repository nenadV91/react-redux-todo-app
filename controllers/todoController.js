const Todo = require('../models/Todo');



module.exports.index = (req, res) => {
  let user_id = req.user;

  Todo
  .find({user_id})
  .then(todos => res.send(todos))
  .catch(err => res.send(err));
}



module.exports.store = (req, res) => {
  let {body} = req.body;
  let user_id = req.user;

  new Todo({body, user_id})
    .save()
    .then(todo => res.send(todo))
    .catch(err => res.send(err));
}



module.exports.destroy = (req, res) => {
  let _id = req.params.id;
  let user_id = req.user;

  Todo
    .remove({_id, user_id})
    .then(todo => res.send(todo))
    .catch(err => res.send(err));
}



module.exports.update = (req, res) => {
  let _id = req.params.id;
  let user_id = req.user;
  let update = req.body;

  Todo
    .findOneAndUpdate({_id, user_id}, update, {new: true})
    .then(todo => res.send(todo))
    .catch(err => res.send(err));
}

