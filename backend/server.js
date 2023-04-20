const express = require('express');
const cors = require('cors');
const parser = require("body-parser")
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(parser.urlencoded({
    extended: false
}));

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
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