const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.post('/', (req, res) => {
      console.log(req.body.json());
      const msg = req.body;
      res.send(msg);
});

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))