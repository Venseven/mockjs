const express = require('express');
const app = express();

app.get('/users', (request, response) => {
    response.json([
      { id: 546, username: 'John' },
      { id: 894, username: 'Mary' },
      { id: 326, username: 'Jane' }
    ]);
  });

app.listen(3001, () => {});