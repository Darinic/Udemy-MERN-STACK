// const fs = require('fs');

// const userName = 'Max'

// fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Wrote to file successfully!');
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Incoming request");
//   console.log(req.method, req.url);

//   if (req.method === "POST") {
//     let body = '';
//     req.on('end', () => {
//       const userName = body.split("=")[1];
//       res.end(`<h1>${userName}</h1>`);
//     });
//     req.on('data', (chunk) => {
//       body += chunk;
//     });
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.end(
//       '<form method="POST"><input type="text" name="username"/><button type="submit">Create User</button></form>'
//     );
//   }
// });

// server.listen(5000);

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res, next) => {
  res.send("<h1> USER:" + req.body.username + "</h1>");
});

// app.use((req, res, next) => {
//   let body = "";
//   req.on("end", () => {
//     const userName = body.split("=")[1];
//     if (userName) {
//       req.body = { name: userName };
//     }
//     next();
//   });
//   req.on("data", (chunk) => {
//     body += chunk;
//   });
// });

app.get('/', (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"/><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);
