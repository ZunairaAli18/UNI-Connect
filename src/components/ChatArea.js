import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import '../styles/ChatArea.css';

const ChatArea = ({ selectedContact, toggleMenu, isMenuOpen }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (selectedContact) {
      setMessages([
        { id: 1, sender: 'them', text: `Hi, I'm ${selectedContact.name}!` },
        { id: 2, sender: 'me', text: 'Hello! How are you?' },
      ]);
    } else {
      setMessages([]);
    }
  }, [selectedContact]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() && selectedContact) {
      setMessages([...messages, { id: messages.length + 1, sender: 'me', text: inputMessage }]);
      setInputMessage('');
    }
  };

  if (!selectedContact) {
    return (
      <div className={`chat-area ${isMenuOpen ? '' : 'expanded'}`}>
        <div className="chat-header">
          <button className="menu-toggle" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
          <h2>Messaging App</h2>
        </div>
        <p className="select-contact">Select a contact to start chatting</p>
      </div>
    );
  }

  return (
    <div className={`chat-area ${isMenuOpen ? '' : 'expanded'}`}>
      <div className="chat-header">
        <button className="menu-toggle" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
        <div className="avatar-container">
          <img src={selectedContact.avatar} alt={selectedContact.name} className="contact-avatar" />
          <span className={`status-indicator ${selectedContact.status}`}></span>
        </div>
        <h2>{selectedContact.name}</h2>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="message-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatArea;
