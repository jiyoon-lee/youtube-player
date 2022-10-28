const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, "../src")));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../'))
})

const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})