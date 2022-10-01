const express = require("express")
const app = express()
const ytdl = require('ytdl-core');
const cors = require("cors")
const PORT = process.env.PORT || 3000;

app.use(cors())

app.get("/", (req, res) => {
    res.send("Ping");
})

app.get("/:id", async (req, res) => {
    const video = await ytdl.getInfo(req.params.id);
    res.send(video);
})

app.listen(PORT, () => console.log(`Listing at PORT: ${PORT}`));