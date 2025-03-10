const express = require('express');
const cors = require('cors')
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors({
  origin: "http://localhost:3001",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Funcionando en puerto ${PORT}`);
});