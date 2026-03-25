const express = require('express')
const app = express()

const port = 3017

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hola Mundo'
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})