// server.js (Node.js/Express backend)
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = twilio(accountSid, authToken);

app.post('/send-otp', async (req, res) => {
    const { phoneNumber } = req.body;

    try {
        const message = await client.messages.create({
            body: 'Your OTP code is: 123456',
            from: '+1234567890', // Twilio phone number
            to: phoneNumber,
        });
        res.status(200).json({ success: true, messageSid: message.sid });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
