// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHEmSWLEn5zKHVIBVT6BnKwFQDElnFKX4",
    authDomain: "web-order-365218.firebaseapp.com",
    databaseURL: "https://web-order-365218-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "web-order-365218",
    storageBucket: "web-order-365218.appspot.com",
    messagingSenderId: "533920931048",
    appId: "1:533920931048:web:ebb76f3925ca8f5ea3fd5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

