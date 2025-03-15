import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req,res) => {
    fs.readFile("./data/posts.json", "utf-8", (error,data) => {
        if (error) {
            return res.status(500).send("Error reading data");
        }
        res.json(JSON.parse(data));
    });
})


export default router;