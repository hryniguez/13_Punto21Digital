const fs = require("fs");



const getJson = (fileName) => {
    const file = fs.readFileSync(`${__dirname}/../database/${fileName}.json`,"utf-8");
    const json = JSON.parse(file);
    return json;
}

const setJson = (array,fileName) => {
    const json = JSON.stringify(array);
    fs.writeFileSync(`${__dirname}/../database/${fileName}.json`,json,"utf-8")
}




module.exports = {setJson, getJson}