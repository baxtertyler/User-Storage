import express from "express";
import cors from "cors";
import userService from "./user-services.js";

const app = express();
const port = 8000;

const findUserByName = (name) => { 
    return userService.findUserByName(name);
}

const findUserById = (id) => {
    return userService.findUserById(id);
}

const findUserByNameAndJob = (name, job) => {
    return users['users_list'].filter((user)=>user['name'] === name).filter((user)=>user['job'] === job);
}

function findUserByJob(job) {
    return userService.findUserByJob(job);
}

/*const deleteUser = (id) => {
    const index = users['users_list'].findIndex((user) => user['id'] === id);
    users['users_list'].splice(index, 1);
    return index;
}*/

const generateID = () => {
    return Math.floor(Math.random() * 999999999).toString();
}

const addUser = (user) => {
    //user['id'] = generateID();
    return userService.addUser(user);
}

app.use(cors());

app.use(express.json());

app.get('/users/:id', (req, res) => {
    const id = req.params['_id'];
    findUserById(id)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch(() => {
            res.status(404).json({ error: 'User not found'});
        })
});

app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    if (name != undefined && job != undefined) {
        findUserByNameAndJob(name, job)
            .then((user) => {
                res.status(200).json(user);
            })
            .catch(() => {
                res.status(404).json({error: 'User not found'});
            });
    }
    if (name != undefined) {
        findUserByName(name)
            .then((user) => {
                res.status(200).json(user);
            })
            .catch(() => {
                res.status(404).json({error: 'User not found'});
            });
    }
    else if (job != undefined) {
        findUserByJob(job)
            .then((user) => {
                res.status(200).json(user);
            })
            .catch(() => {
                res.status(404).json({error: 'User not found'});
            });
    } else {
        userService.getUsers()
            .then((users) => {
                res.status(200).json({users_list:users});
            })
            .catch((error) => {
                res.status(500).json({error});
            });
    }
});

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch(() => {
            res.status(404).json({error: 'User could not be added'});
        });
});

/*app.delete('/users/:id', (req, res) => {
    const id = req.params['_id'];
    let result = deleteUser(id);
    if (result == undefined) {
        res.status(404).send("Resource not found");
    } else {
        res.status(203);
    }
    res.send();
});*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});