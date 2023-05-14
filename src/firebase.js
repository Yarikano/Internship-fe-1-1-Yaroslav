// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBySytPnAbKPYwVmhImGfMNGencOnksIBg',
	authDomain: 'financialmarketnewsblogproject.firebaseapp.com',
	projectId: 'financialmarketnewsblogproject',
	storageBucket: 'financialmarketnewsblogproject.appspot.com',
	messagingSenderId: '112853755094',
	appId: '1:112853755094:web:79e00e950a15c8a1fd5577'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
