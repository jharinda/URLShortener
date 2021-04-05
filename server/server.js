const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { nanoid } = require('nanoid');
const Link = require('./models/Link');

mongoose.connect('mongodb://localhost/shortner')
    .then(() => console.log('connected to mongo db'))
    .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {

    try {
        const linkInfo = new Link({
            originalLink: req.body.link,
            shortCode: nanoid(5)
        });

        const newLink = await linkInfo.save();
        res.json({
            redirectUrl: `http://localhost:3000/${newLink.shortCode}`
        });
    } catch (err) {
        console.log(err);
    }
})

app.get('/:id', async (req, res) => {

    try {
        const linkData = await Link.findOne({
            shortCode: req.params.id
        });

        res.redirect(linkData.originalLink);
    } catch (err) {
        console.log(err);
    }
})

app.listen(3000, () => {
    console.log("Working on 3000");
});