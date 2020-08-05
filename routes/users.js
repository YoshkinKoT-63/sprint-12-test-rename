const users = require('express').Router();
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '../data/users.json');

const usersData = JSON.parse(fs.readFileSync(filepath, { encoding: 'utf8' }));

users.get('/', (req, res) => {
  res.send(usersData);
});

users.get('/:id', (req, res) => {
  const userData = usersData.find((user) => user._id === req.params.id);
  if (userData) {
    res.send(userData);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = users;
