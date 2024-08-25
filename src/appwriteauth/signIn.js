// async function loginUser(phoneNumber, otp) {
//     // Verify OTP here
//     if (verifyOTP(inputOtp, generatedOtp)) {
//         try {
//             // Log in the user with Appwrite
//             const response = await account.createSession(phoneNumber, otp);
//             console.log('User logged in:', response);
//         } catch (error) {
//             console.error('Login failed:', error);
//         }
//     } else {
//         console.error('OTP verification failed');
//     }
// }