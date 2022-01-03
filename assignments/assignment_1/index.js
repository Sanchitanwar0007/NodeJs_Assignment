// const process = require('process');
function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const input=process.argv;
    
    return input[input.length-1];
}

function getNameFromEnv() {
    // Write your code her
    process.env.name="Yash";
    return process.env.name;

}

function getNameFromReadLine() {
    // Write your code here
    const readLine=require("readline");
    const r1=readLine.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    r1.question("name",(name)=>{
        n=name
    })
    return name;
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}
