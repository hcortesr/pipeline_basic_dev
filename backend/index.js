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


export default app;