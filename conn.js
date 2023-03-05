const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/bookBackend', {
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection is set.")
}).catch((err) => {
    console.log("Connection Failed", err)
})
