const express = require('express');
const router = express.Router();
const Todo = require('../controllers/todoController');


router.get('/todos', Todo.index);
router.post('/todos', Todo.store);
router.delete('/todos/:id', Todo.destroy);
router.put('/todos/:id', Todo.update);


module.exports = router;