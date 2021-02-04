const express = require('express')
const PORT = 8080
const app = express()

app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.get('/', (request, response) => {
    console.log('something')
    response.end()
})

app.listen(PORT, () => {
    console.log('Server OK, and apparently no problems 😁 ... fow now 👀')
})