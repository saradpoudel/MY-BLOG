import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7E733EfLI4-MYU0uHR1MjSjux1xMUHXU",
  authDomain: "my-react-blog-16a20.firebaseapp.com",
  projectId: "my-react-blog-16a20",
  storageBucket: "my-react-blog-16a20.appspot.com",
  messagingSenderId: "322084290874",
  appId: "1:322084290874:web:21c35046b8e7062af71003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
