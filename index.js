// console.log('Hello World');

let express = require("express");
let app = express();

app.use('/src/', express.static('src'));
app.use('/src/assets/', express.static('src/assets'));

"/"

app.get("/", function(req, res) {
    // res.send('Hello World');

    // Render a file
    res.render("index.ejs")
})

// Works with variables
app.get("/film/:imdBTitle", function(req, res) {
    let imdBTitle = req.params.ImdBTitle;

    res.render("film.ejs", {imdBTitle: imdBTitle});
})

// Routes everything else except above
app.get("*", function(req, res) {
    res.send('Hmm, nothing here ... strange');
})

// Tells Express.js to listen for requests
app.listen(3001, function() {
    console.log('Serving is running!');
})

// // Suggestions by nodejs.org
// const http = require('http');
// //
// const hostname = '127.0.0.1';
// const port = 3000;
// //
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// //
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });