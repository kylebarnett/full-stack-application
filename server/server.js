const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const app = express()
const port = 4007

const AuthCtrl = require('./controllers/AuthCtrl')
const PostsCtrl = require('./controllers/PostsCtrl')
massive(process.env.CONNECTION_SESSION).then(db => {
  app.set('db', db)
  console.log('HPHPHPHP is connected')
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))

app.use(bodyParser.json())

app.get('/auth/callback', AuthCtrl.auth)
app.get('/api/currentUser', (req, res) => {
  res.send(req.session.user)
})
app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
})
//posts
app.get('/api/posts', PostsCtrl.read)
app.post('/api/posts', PostsCtrl.create)

app.listen(port, () => {
  console.log("Hello Harry", port)
})