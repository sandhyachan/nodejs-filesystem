const express = require('express')
const {createDirectory, createFile} = require('./utils/file-sys')
const server = express()


server.listen(3001, () => {
    console.log("Server is running on http://localhost:3001")
})

server.get('/', ( request, response) => {
    createDirectory()
    createFile()
    response.send(`<h1> Node.js is running successfully! </h1>`)
})