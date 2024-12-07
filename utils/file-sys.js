// Importing 'fs' for file system operations
const fileSys = require('node:fs')
// Import dateTime function from the 'date-time' module
const {dateTime} = require('./date-time')

// Function to create a 'timestamp' directory
function createDirectory() {
    fileSys.mkdir('./timestamp', (error) => {
        if(error){
            console.log(error)
        }
        else console.log("Directory created successfully") // Error if directory fails
    })
}

// Function to append current date and time to 'date-time.txt' file
function createFile() {
    fileSys.appendFileSync('./timestamp/date-time.txt', 'The current date and time as of India is ' + dateTime() + '\n', 'utf8')
}

// Function to get all '.txt' files in the 'timestamp' directory
function retrieveFiles() {
    try {const dirFiles = fileSys.readdirSync('./timestamp')
    const textFiles = dirFiles.filter((file)=>file.endsWith('.txt')) // Filter '.txt' files
    return textFiles
}
    catch(err){
        console.log(err) // Error if reading files fail
        return []
    }
}

module.exports = {
    createDirectory,
    createFile,
    retrieveFiles
}