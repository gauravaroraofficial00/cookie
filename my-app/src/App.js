import React, { useEffect } from 'react'; // Import useEffect here
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => { // Correct usage of useEffect
    console.log("🚀 ~ file: App.js:8 ~ useEffect ~ document.cookie:", document.cookie)
    console.log(document.cookie); // This will log all cookies accessible to this domain
  }, []);

  return (
    <h1>
      NEw page
    </h1>
  );
}

export default App;
