const express = require('express');
const bodyParser = require('body-parser');

module.exports = async function createServer() {
  const app = express();
  app.use(bodyParser.json());

  const users = {};

  app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'username and password required' });
    }
    users[username] = password;
    return res.json({ token: 'fake-jwt-token' });
  });

  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'username and password required' });
    }
    if (users[username] !== password) {
      return res.status(401).json({ error: 'invalid credentials' });
    }
    return res.json({ token: 'fake-jwt-token' });
  });

  return app;
}
