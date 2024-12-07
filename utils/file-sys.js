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
    fileSys.appendFileSync('./timestamp/date-time.txt', 'The current date and time as of India is' + dateTime() + '/n', 'utf8')
}

module.exports = {
    createDirectory,
    createFile
}