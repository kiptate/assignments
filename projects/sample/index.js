const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 1337
const Blog = require('./Blog')

mongoose.connect('mongodb://localhost:27017/Blog-db',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

app.get('/blog', function (req, res) {
    Blog.find({}, function (err, data) {
      res.send(data);
    });
  });

app.post('/routeName', (req, res, next) => {
    const newBlog = new Blog(req.body);
    newBlog.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newTodoObj);
    });
})

app.listen(port, () => {
   console.log( `server is running on ${port}`)
})