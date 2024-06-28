const express = require('express');
var shell = require('shelljs');
const books = require('./books.json');
const authors = require('./authors.json');
const publishers = require('./publishers.json');

const app = express();

let virtualShutdown = false;

app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  if(req.url === '/toggleShutdown' || req.url === '/serverStatus' || req.url.includes('specRunner')) return next();
  if(virtualShutdown) {
    res.status(501).send(`{"stderr": "internal server error"}`)
  }
  else next();
})


app.get('/toggleShutdown', (req, res) => {
  virtualShutdown = !virtualShutdown;
  res.status(200).send(`{"server_status": "${virtualShutdown ? 'down' : 'up'}"}`)
})

app.get('/serverStatus', (req, res) => {
  res.status(200).send(`{"server_status": "${virtualShutdown ? 'down' : 'up'}"}`)
})

app.get('/books', (req, res) => {
  res.status(200).send(books);
})

app.get('/books/:bookId', (req, res) => {
  const { bookId } = req.params;
  res.status(200).send(books.filter(b => b.id === Number(bookId)))
})

app.get('/authors', (req, res) => {
  res.status(200).send(authors);
})

app.get('/authors/:authorId', (req, res) => {
  const { authorId } = req.params;
  res.status(200).send(authors.filter(a => a.id === Number(authorId)))
})

app.get('/publishers', (req, res) => {
  res.status(200).send(publishers);
})

app.get('/publishers/:publisherId', (req, res) => {
  const { publisherId } = req.params;
  res.status(200).send(publishers.filter(p => p.id === Number(publisherId)))
})

app.get('/specRunner/:testFile', (req, res) => {
  const { testFile } = req.params;
  
  const response = {
    passed: false,
    stdout: null,
    stderr: null,
  }

  const result = shell.exec(`vitest run ${testFile}`)

  response.passed = result.code === 0;
  response.stdout = result.stdout;
  response.stderr = result.stderr;

  res.status(200).send(JSON.stringify(response));
})




app.listen(3001, () => {
  console.log('server is running.')
})