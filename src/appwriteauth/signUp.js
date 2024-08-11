async function signUpUser(phoneNumber, username, otp) {
    // Verify OTP here
    if (verifyOTP(inputOtp, generatedOtp)) {
        try {
            // Sign up the user with Appwrite
            const response = await account.create(ID.unique(), phoneNumber, otp, username);
            console.log('User signed up:', response);
        } catch (error) {
            console.error('Signup failed:', error);
        }
    } else {
        console.error('OTP verification failed');
    }
}