import express from "express";
import fs from "fs";

const router = express.Router();

// Get all Details
router.get("/", (req, res) => {
    fs.readFile("./data/posts.json", "utf-8", (error,data) => {
        if (error) {
            return res.status(500).send("Error reading data");
        }
        res.json(JSON.parse(data));
    });
});

// Get a single id from the Details 
router.get("/:id", (req,res) => {
    const { id } = req.params;

    fs.readFile("./data/posts.json", "utf-8", (error,data) => {
        if (error) {
            return res.status(500).send("Error reading data");
        }
        
        const details = JSON.parse(data);
        const detail = details.find((d) => d.id === Number(id));

        if (!detail) {
            return res.status(404).send("Detail not found");
        }
        res.json(detail);
    });
});


export default router;