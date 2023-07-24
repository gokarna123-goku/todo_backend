import express from 'express';

const route = express.Router();

route.post('/todos', (req, res) => {
    console.log(req.body);
});

export default route;