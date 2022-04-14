import { Appwrite } from 'appwrite';
// Init your Web SDK
const appwrite = new Appwrite();
appwrite
  .setEndpoint('http://EndpointURL.example') // Replace this with your endpoint
  .setProject('ProjectID'); // Replace this with your ProjectID

appwrite.account.createAnonymousSession().then(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }
);

export const db = appwrite.database;
export const COLLECTION_ID = 'COLLECTION ID'; 