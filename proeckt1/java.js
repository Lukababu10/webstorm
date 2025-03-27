const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
// 1. Get all users
app.get('/users', (req, res) => {
    res.json(users);
});
// 2. Get a user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});
app.post = function (s, param2) {
};
// 3. Create a new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
// 4. Update a user by ID
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.json(user);
});
// 5. Delete a user by ID
app.delete('/users/:id', (req, res) => {
    req.params = undefined;
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
