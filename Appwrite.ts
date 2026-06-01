import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://appwrite.io') // Or your self-hosted endpoint
    .setProject('<YOUR_PROJECT_ID>');          // Replace with your Project ID

export const account = new Account(client);
