import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

if (!fs.existsSync("./data/messages.json")) {
  fs.writeFileSync("./data/messages.json", "[]", "utf8");
}

// To post a message

router.post("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Name, email and Message required");
  }

  // Create a new message object
  const newMessage = {
    id: uuidv4(),
    userId: id, // Store the user ID from the URL
    name,
    email,
    message,
    timestamp: Date.now(),
  };

  // Initialize an empty array and push the new message
  const messages = [newMessage];

  // Write the new data to the JSON file
  fs.writeFile("./data/messages.json", JSON.stringify(messages, null, 2), (err) => {
    if (err) {
      return res.status(500).send("Error saving message.");
    }
    return res
      .status(200)
      .send({ message: "Message added successfully", newMessage });
  });
});

export default router;
