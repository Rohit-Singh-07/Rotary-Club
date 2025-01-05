// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/club', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Image Schema
const imageSchema = new mongoose.Schema({
  filename: String,
  path: String,
  gallery: String, // 'rotary' or 'redcross'
  uploadDate: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);

// Multer Configuration
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// API Routes
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    const { gallery } = req.body;
    const newImage = new Image({
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
      gallery: gallery
    });
    await newImage.save();
    res.json({ success: true, image: newImage });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/images/:gallery', async (req, res) => {
  try {
    const images = await Image.find({ gallery: req.params.gallery });
    res.json(images);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete('/api/images/:id', async (req, res) => {
  try {
    await Image.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));