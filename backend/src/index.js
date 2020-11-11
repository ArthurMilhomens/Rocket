const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Koee' });
})

app.listen(3333);

// app.listen(3333, () => {
//   console.log('da pra colocar função aqui!')
// });