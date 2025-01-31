require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();


const corsOptions = {
  origin: "*", 
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true, 
};

app.use(cors(corsOptions));
app.use(express.json()); 


mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


const imageSchema = new mongoose.Schema({
  filename: String,
  data: Buffer, 
  contentType: String, 
  gallery: String, 
  uploadDate: { type: Date, default: Date.now },
});

const Image = mongoose.model("Image", imageSchema);


const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });


app.get("/api/images/:id/image", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id); 
    if (image) {
      res.set("Content-Type", image.contentType);
      res.send(image.data); 
    } else {
      res.status(404).json({ success: false, error: "Image not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


app.get("/api/images/:gallery", async (req, res) => {
  try {
    const images = await Image.find({ gallery: req.params.gallery });
    res.json(images); 
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


app.get("/api/images/:id/image", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id); 
    if (image) {
      res.set("Content-Type", image.contentType); 
      res.send(image.data); 
    } else {
      res.status(404).json({ success: false, error: "Image not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete an Image
app.delete("/api/images/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id); 
    if (image) {
      await Image.findByIdAndDelete(req.params.id); 
      res.json({ success: true }); 
    } else {
      res.status(404).json({ success: false, error: "Image not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/api/upload", upload.single("image"), async (req, res) => {
  try {
    const { gallery } = req.body; 
    const newImage = new Image({
      filename: req.file.originalname,
      data: req.file.buffer, 
      contentType: req.file.mimetype, 
      gallery: gallery, 
    });
    await newImage.save(); 
    res.json({ success: true, image: newImage }); 
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
