import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    //databaseURL: 'https://my-example-app.firebaseio.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

const app = initializeApp(firebaseConfig);

export default app; 

export const auth = getAuth(app);
