import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';
import dalleRoutes from './routes/dalleRoutes.js'; // Update this path as necessary

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Log API key for debugging (remove in production)
console.log('API Key:', process.env.OPENAI_API_KEY);

// Routes
app.use('/api/dalle', dalleRoutes); // Update your API base route as necessary

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
