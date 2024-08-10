import express, { json } from 'express';
import cors from 'cors';

import { configDotenv } from 'dotenv'
import { initiateMpesaPayment } from './daraja.mjs';
configDotenv('./.env')

const app = express();
// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
}))


// app.use(cors())
app.use(json());

app.post('/api/pay', async (req, res) => {
    const { phone, amount } = req.body;

    try {
        const response = await initiateMpesaPayment(phone, amount);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
