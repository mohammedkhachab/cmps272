// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAYwJQ1gb6ZEOOBlK1zMMRXCDV_2lkl1pM',
	authDomain: 'tourism-compass.firebaseapp.com',
	projectId: 'tourism-compass',
	storageBucket: 'tourism-compass.appspot.com',
	messagingSenderId: '639698867050',
	appId: '1:639698867050:web:02b9c25bd8f7e054098b13',
	measurementId: 'G-702632ZNG6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
