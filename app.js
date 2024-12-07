// Import Express framework
const express = require('express')
const {createDirectory, createFile, retrieveFiles} = require('./utils/file-sys')
const server = express()

// Start server and listen on port 3001
server.listen(3001, () => {
    console.log("Server is running on http://localhost:3001")
})

// Route for the homepage
server.get('/', ( request, response) => {
    createDirectory()
    createFile() // Append timestamp to file
    response.send(`
        <h1> Node.js is running successfully! </h1>
        <h4> Click this link to get the files for timestamp.</h4>
        <a href='/files'>Get Timestamp</a>`)
})

// Route to get all '.txt' files in 'timestamp' folder
server.get('/files', (request, response) => {
    const textFiles = retrieveFiles()
    if (textFiles.length>0) {
        response.json(textFiles)// Return list of files if found
    } else {
        response.json({ message: 'No text files found'})
    }
})