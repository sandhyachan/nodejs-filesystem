const express = require('express')
const {createDirectory, createFile, retrieveFiles} = require('./utils/file-sys')
const server = express()


server.listen(3001, () => {
    console.log("Server is running on http://localhost:3001")
})

server.get('/', ( request, response) => {
    createDirectory()
    createFile()
    response.send(`
        <h1> Node.js is running successfully! </h1>
        <h4> Click this link to get the files for timestamp.</h4>
        <a href='/files'>Get Timestamp</a>`)
})

server.get('/files', (request, response) => {
    const textFiles = retrieveFiles()
    if (textFiles.length>0) {
        response.json(textFiles)
    } else {
        response.json({ message: 'No text files found'})
    }
})