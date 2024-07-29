import { account } from './appwrite';

const signUp = async (username, email, password) => {
  try {
    const response = await account.create('unique()', email, password, username);
    console.log('User created successfully', response);
    return response;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export default signUp;
