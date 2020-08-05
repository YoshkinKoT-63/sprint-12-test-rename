const cards = require('express').Router();
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, '../data/cards.json');

cards.get('/', (req, res) => {
  res.send(JSON.parse(fs.readFileSync(filepath, { encoding: 'utf8' })));
});

module.exports = cards;
