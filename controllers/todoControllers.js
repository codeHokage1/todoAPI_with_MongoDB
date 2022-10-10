const TodoModel = require('../models/Todo')

// Retrieve all Todo tasks
exports.getAllTodos = async (req, res) => {
    const allTodos = await TodoModel.find({});
    res.json({
        "todos": allTodos
    })
}


// Retrieve one Todo task
exports.getOneTask = async (req, res) => {
    const id = req.params.id;
    const foundTask = await TodoModel.findById(id).exec();

    if (!foundTask) {
        res.status(404).json({
            "message": `Task with ${id} not found`
        })
    }

    res.json({
        'message': 'Found task',
        foundTask
    })
}


// Add a new Todo task
exports.addTask = async (req, res) => {
    const taskDetails = req.body;
    if (!taskDetails.title || !taskDetails.description) {
        return res.status(400).json({
            "message": "Task must include title and description"
        })
    }

    const newTask = { ...taskDetails };
    await TodoModel.create(newTask, (err, result) => {
        if (err) {
            console.log(err.message);
        }
        res.status(201).json({
            "message": "Task created successfully",
            result
        })
    })
}


// Update a Todo task
exports.updateTask = async (req, res) => {
    const id = req.params.id;
    const taskUpdates = req.body;
    const foundTask = await TodoModel.findById(id).exec();
    
    if (!foundTask) {
        return res.status(404).json({
            "message": `Flight with id ${id} not found`
        })
    }
    await TodoModel.findByIdAndUpdate(
        id,
        { ...taskUpdates },
        (err, result) => {
            if (err) {
                console.log(err.message);
            }
            res.status(201).json({
                "message": "Task updated successfully",
                result
            })
        }
    ).clone()
}


// Delete Task
exports.deleteTask = async (req, res) => {
    const id = req.params.id;
    const foundTask = await TodoModel.findById(id).exec();
    
    if (!foundTask) {
        return res.status(404).json({
            "message": `Flight with id ${id} not found`
        })
    }

    const response = await TodoModel.findByIdAndDelete(id).exec()
    res.sendStatus(204);
}