require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET

app.use(cors());
app.use(express.json()); // Ensure this middleware is applied
// //('MONGO_URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const newsSchema = new mongoose.Schema({
  heading: String,
  intro: String,
  link: String,
});

const User = mongoose.model('User', userSchema);
const NationalNews = mongoose.model('NationalNews', newsSchema);
const InternationalNews = mongoose.model('InternationalNews', newsSchema);
const MarketNews = mongoose.model('MarketNews', newsSchema);
const Updates = mongoose.model('Updates', newsSchema);

// Register route
app.post('/api/register', async (req, res) => {
  const { username, password } = req.query;
  
  if (!username || !password) {
    return res.status(400).json({ message: `Username and password are required ${req.body}` });
  }
  const hashedPassword = md5(password);
  const user = new User({ username, password: hashedPassword });
  await user.save();
    return res.status(201).json({ message: 'User created' });
});

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  //('Login Request Body:', req.body);
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const hashedPassword = md5(password);
  //('Entered Password:', password);
  //('Hashed Entered Password:', hashedPassword);
  //('Stored Password:', user.password);

  const isMatch = hashedPassword === user.password;
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  return res.status(200).json({ message: 'Login successful' });
});

// Protected route example
app.post('/api/national-news', async (req, res) => {
  const { heading, intro, link } = req.body;
  const news = new NationalNews({ heading, intro, link });
  await news.save();
  res.json(news);
});

app.post('/api/international-news', async (req, res) => {
  const { heading, intro, link } = req.body;
  const news = new InternationalNews({ heading, intro, link });
  await news.save();
  res.json(news);
});

app.post('/api/market-news', async (req, res) => {
  const { heading, intro, link } = req.body;  
  const news = new MarketNews({ heading, intro, link });
  await news.save();
  res.json(news);
});

app.post('/api/updates', async (req, res) => {
  const { heading } = req.body;
  const update = new Updates({ heading });
  await update.save(); 
  res.json(update);
});

app.get('/api/national-news', async (req, res) => {
  const news = await NationalNews.find();
  res.json(news);
});

app.get('/api/international-news', async (req, res) => {
  const news = await InternationalNews.find();
  res.json(news);
});

app.get('/api/market-news', async (req, res) => {
  const news = await MarketNews.find();
  res.json(news);
});

app.get('/api/updates', async (req, res) => {
  const updates = await Updates.find();
  res.json(updates);  
});

app.delete('/api/national-news/:id', async (req, res) => {
  const { id } = req.params;
  await NationalNews.findByIdAndDelete(id);
  res.json({ message: 'News deleted' });
});

app.delete('/api/international-news/:id', async (req, res) => {
  const { id } = req.params;
  await InternationalNews.findByIdAndDelete(id);
  res.json({ message: 'News deleted' });
});

app.delete('/api/market-news/:id', async (req, res) => {
  const { id } = req.params;
  await MarketNews.findByIdAndDelete(id);
  res.json({ message: 'News deleted' });
});

app.delete('/api/updates/:id', async (req, res) => {
  const { id } = req.params;
  await Updates.findByIdAndDelete(id);
  res.json({ message: 'Update deleted' });
});

// Serve static files from the React app (frontend build)
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all handler to serve React's index.html for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
  //(`Server is running on port ${PORT}`);
});