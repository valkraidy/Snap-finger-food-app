import { account } from './appwrite';

const signIn = async (email, password) => {
    try {
         
        const response = await account.createEmailPasswordSession(email, password);
       
        return response;
      
    } catch (error) {
        throw error;
    }
};

export default signIn;
