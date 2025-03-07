const express = require('express');
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log('prueba')
  console.log(`Funcionando en puerto ${PORT}`);
});