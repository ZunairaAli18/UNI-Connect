import React, { useEffect } from 'react';
import MessagingApp from './components/MessagingApp';
import socket from './components/socket';
import './styles/global.css';

function App() {
  useEffect(() => {
   console.log(socket);
    
  },[])
  return (
    <div className="app">
      <MessagingApp />
    </div>
  );
}

export default App;