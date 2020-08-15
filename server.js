const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, 'build');

app.use(express.static(publicPath));
app.use(express.static("./build"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(require('./src/App.js'))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

//  app.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, 'build', 'index.html'));
//  });

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});