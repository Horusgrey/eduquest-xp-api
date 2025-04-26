import express from 'express';
import cors from 'cors';
import xpRoute from './xp.js'; // ✅ Correct local path

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/health', (_, res) => res.json({ ok: true }));

// XP route
app.use('/api/xp', xpRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});