import React, { useEffect } from 'react'; // Import useEffect here
import logo from './logo.svg';
import './App.css';

function App() {
  
  // useEffect(() => { // Correct usage of useEffect
  //   console.log("🚀 ~ file: App.js:8 ~ useEffect ~ document.cookie:", document.cookie)
  //   console.log(document.cookie); // This will log all cookies accessible to this domain
  // }, []);

  useEffect(() => {

    window.addEventListener('message', function(event) {
      console.log("Message received from the parent: " + event.data); // Message received from parent
    });
  },[])

  return (
    <h1>
      New page Test 3
    </h1>
  );
}

export default App;
