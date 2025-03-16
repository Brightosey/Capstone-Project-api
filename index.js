import express from "express";
import cors from "cors";
import "dotenv/config";
import slidesRoute from "./Routes/slides.js";
import postsRoute from "./Routes/posts.js";

const app = express();

const PORT = process.env.PORT || 6060;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/slides", slidesRoute);
app.use("/newsfeed", postsRoute);



app.get("/", (req,res) => {
    res.send("Jesus is the WAY, the TRUTH, and the LIFE");
});

app.listen(PORT, (req,res) => {
    console.log(`The server is running on ${PORT}.`);
});

    