const express = require('express');
const api = require('./routes/index.js');

const app = express();
const PORT = 5500;
const path = require('path');

app.use(express.json());
app.use(express.static('public'));
// /api/notes
app.use("/api", api);

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get('*', (req, res) =>{
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:5500`);
});