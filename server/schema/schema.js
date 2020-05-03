const mongoose = require('mongoose');
module.exports = {
    product: new mongoose.Schema({
        myText: String,
        colorText: String,
        colorBase: String,
        shape: String,
        image: String,
        imageSrc: String
    }),
    User: new mongoose.Schema({
        id: String,
        name: String,
        adress: String,
        email: String,
        provider: String
    })
}

