const express = require('express');
const mongoose = require('mongoose');
const { requireAuth, checkUser } = require('./middlewares/authMiddleware')
require('dotenv').config()
const authRoute = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json())
app.use(cookieParser())

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb://127.0.0.1:27017/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*',checkUser)
app.get('/', requireAuth, (req, res) => res.render('home'));
app.get('/techstacks',requireAuth, (req, res) => res.render('techstacks'));
app.get('/set-cookie',(req, res)=>{
  // httpOnly means it will be send as part of http request we cannot access it from JS using document.cookie
  res.cookie('newUser',true,{httpOnly: true, maxAge: 1000 * 60 * 60 * 24});
  res.cookie('isEmployee', false,{httpOnly: true})
  res.send('You got the cookies!')
})
app.get('/read-cookie', (req, res) =>{
  const cookie = req.cookies;
  console.log(cookie);
  res.json(cookie)
})
app.use(authRoute)