// import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('669f868700200a22247f');               // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com','name' ,'');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure


// });

import { Client, Account } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('669f868700200a22247f'); // Your project ID

const account = new Account(client);

export { client, account };


