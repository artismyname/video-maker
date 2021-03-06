const fs = require('fs')
const contentFilePath = './content.json'
const scriptFilePath = './content/ffmpeg-script.js'

function save(content) {
    const contentString = JSON.stringify(content)
    return fs.writeFileSync(contentFilePath, contentString)
}

function saveScript(content) {
    const contentString = JSON.stringify(content)
    const scriptString = `var content = ${contentString}`
    return fs.writeFileSync(scriptFilePath, scriptString)
}

function load() {
    const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8')
    const contentJSON = JSON.parse(fileBuffer)
    return contentJSON
}

module.exports = {
    save,
    saveScript,
    load
}