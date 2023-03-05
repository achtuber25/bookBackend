let mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    name: String,
    currentMood: {
        emoji: String,
        videoUrl: String,
        placeHolder: String
    },
    password: String,
}, {
    timestamps: true
})

let user = new mongoose.model('family', userSchema)

user.findOne({
    name: 'aditya'
}).then((res) => {
    if (!res)
        user.create({
            name: 'aditya'
        })
})

user.findOne({
    name: 'vandna'
}).then((res) => {
    if (!res)
        user.create({
            name: 'vandna'
        })
})

module.exports = user;