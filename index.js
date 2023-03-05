const express = require('express');
require('./conn');
require('./server');

var cors = require("cors");
// const path = require('path');
const app = express();

const adminRouter = require('./adminRoute').Router
const bodyParser = require('body-parser');
const port = process.env.PORT || 143;




app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(express.json());
app.use(cors());
app.use('/admin', adminRouter)

// const allowedExt = [
//     '.js',
//     '.ico',
//     '.css',
//     '.png',
//     '.jpg',
//     '.woff2',
//     '.woff',
//     '.ttf',
//     '.svg',
// ];


// app.get('/adminPanel*', (req, res) => {
//     if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
//         let url = (req.url.split('?')[0]).replace('/adminPanel', '')
//         res.sendFile(path.resolve(path.join(__dirname, '..', 'eadhan-admin', 'build', url)));
//     } else
//         res.sendFile(path.resolve(path.join(__dirname, '..', 'eadhan-admin', 'build', 'index.html')));

// });



app.listen(port, () => {
    console.log('app listening on port:', port);
})

