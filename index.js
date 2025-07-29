// Import express
import express from 'express';
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint: /health
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Endpoint: /echo
app.post('/echo', (req, res) => {
  res.json(req.body);
});

// Endpoint: /hello
app.get('/hello', (req, res) => {
  res.status(201).send('Hello, world!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;