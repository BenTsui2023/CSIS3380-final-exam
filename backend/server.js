const express = require('express');
const cors = require('cors');
const parser = require("body-parser")
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(parser.urlencoded({
    extended: false
}));

app.use(cors());
app.use(express.json());

// you can replace your own mongoDB url
const uri = "mongodb+srv://newuser:1234@cluster0.uxnqp8k.mongodb.net/BookList";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database successfully connected");
})

const bookListRouter = require('./routes/bookList.js');

app.use('/book', bookListRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});