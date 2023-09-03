import todo from "../model/Todo.js";
import Todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();
    res.status(200).json(newTodo); 
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Get all todos controller

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// toggle todo controller

export const toggleTodoDone = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );

    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
