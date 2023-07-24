import Todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
    try{
        const newTodo = await Todo.create({
            data: req.body.data,
            createdAt: Date.now(),
        });
        await newTodo.save();
        res.status(200).json(newTodo);
    } catch (error){
        return res.status(500).json(error.message)
    }
};
