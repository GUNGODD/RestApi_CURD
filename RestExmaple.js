 const express = require('express')
const app = express()
const port = 3000


const Users = ["Alan", "Almora", "kick", "Neil"];


app.get('/', (req, res) => res.send.json(Users));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

