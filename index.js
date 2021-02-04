const express = require('express')
const router = require('./routes')

const PORT = 8080
const app = express()

app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.use('/', router)

app.listen(PORT, () => {
    console.log('Server OK, and apparently no problems 😁 ... fow now 👀')
})