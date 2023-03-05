const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://adityav:anaya@cluster0.r6f8ysb.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection is set.")
}).catch((err) => {
    console.log("Connection Failed", err)
})
