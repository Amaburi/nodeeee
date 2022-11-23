const mongoose= require('mongoose')

const userSchema = mongoose.Schema({
    nama : {
        type: String,
        required: [true,'Please fill the name'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill the email']
    }
})

module.exports = mongoose.model('User',userSchema)