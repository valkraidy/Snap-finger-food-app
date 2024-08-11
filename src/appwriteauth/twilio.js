// import twilio from 'twilio';

// // Twilio setup
// const client = twilio('<TWILIO_ACCOUNT_SID>', '<TWILIO_AUTH_TOKEN>');

// // Function to send OTP
// export const sendOTP = async (phoneNumber) => {
//     const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

//     try {
//         // Send OTP via SMS using Twilio
//         const message = await client.messages.create({
//             body: `Your OTP code is ${otp}`,
//             to: phoneNumber,
//             from: '<TWILIO_PHONE_NUMBER>'
//         });
//         console.log('OTP sent:', message.sid);
//         return otp; // Return the generated OTP to verify later
//     } catch (error) {
//         console.error('Failed to send OTP:', error);
//         throw new Error('Failed to send OTP');
//     }
// };


// services/twilio.js
export const sendOTP = async (phoneNumber) => {
    try {
        const response = await fetch('http://your-backend-url/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber }),
        });

        const result = await response.json();
        if (result.success) {
            return '123456'; // The OTP you send via Twilio
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
};

