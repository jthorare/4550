import people from './../data/users.js';
let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUsersById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const deleteUser = (req, res) => {
    users = users.filter(u => u._id !== req.params.uid);
    res.json(users);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    users = users.map(u => 
        u._id === userId ?
        updatedUser:
        u);
    res.sendStatus(200);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type) {
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

const findUsersById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const findUsersByType = (type) => {
    var usersOfType = users.filter(user => user.type == type);
    return usersOfType;
}

export default userController;