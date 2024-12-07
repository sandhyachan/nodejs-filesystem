const fileSys = require('node:fs')
const {dateTime} = require('./date-time')

function createDirectory() {
    fileSys.mkdir('./timestamp', (error) => {
        if(error){
            console.log(error)
        }
        else console.log("Directory created successfully")
    })
}

function createFile() {
    fileSys.appendFileSync('./timestamp/date-time.txt', 'The current date and time as of India is ' + dateTime() + '\n', 'utf8')
}

function retrieveFiles() {
    try {const dirFiles = fileSys.readdirSync('./timestamp')
    const textFiles = dirFiles.filter((file)=>file.endsWith('.txt'))
    return textFiles
}
    catch(err){
        console.log(err)
        return []
    }
}

module.exports = {
    createDirectory,
    createFile,
    retrieveFiles
}