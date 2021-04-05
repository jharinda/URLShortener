const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
    originalLink: {
        type: String
    },
    shortCode: {
        type: String
    }
});

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;