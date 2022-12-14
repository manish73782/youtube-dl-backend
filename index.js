const express = require("express")
const app = express()
const ytdl = require('ytdl-core');
const cors = require("cors")
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post("/search", (req, res) => {
    ytdl.getInfo(req.body.id)
        .then(video => res.send({ formats: video.formats, videoDetails: video.videoDetails }))
        .catch(() => res.status(500).send("No Video Found"))
})

app.post("/download", (req, res) => {
    const { url } = req.body.url;
    res.sendFile(url)
})

app.listen(PORT, () => console.log(`Listing at PORT: ${PORT}`));