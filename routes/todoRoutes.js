const express = require('express');
const todoRouter = express.Router();
const controllers = require('../controllers/todoControllers');


todoRouter
    .get('/', controllers.getAllTodos)
    .get('/:id', controllers.getOneTask)
    .post('/', controllers.addTask)
    .put('/:id', controllers.updateTask)
    .delete('/:id', controllers.deleteTask)


module.exports = todoRouter;