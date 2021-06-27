const http = require('http')

const port = 6000;
// const studentProfile = require("./Json_File/First.json")

const app = http.createServer((req, res) => {
    
    res.write("Hello node.js")
    console.log("server created");
    res.write("Hello node.js");
    res.setHeader("Content-Type", "application/json" );
    res.write(JSON.stringify(studentProfile));
    console.log(studentProfile);
    console.log(JSON.stringify(studentProfile));
    res.end();
});




app.listen(port, () => {
    console.log(`Server is up and running ${port}`)
})