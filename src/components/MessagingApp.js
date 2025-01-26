import React, { useState } from 'react';
import ContactList from './ContactList';
import ChatArea from './ChatArea';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/MessagingApp.css';

const MessagingApp = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = [
    { id: 1, name: 'Alice Johnson', avatar: '/placeholder.svg?height=40&width=40&text=AJ', status: 'online' },
    { id: 2, name: 'Bob Smith', avatar: '/placeholder.svg?height=40&width=40&text=BS', status: 'offline' },
    { id: 3, name: 'Charlie Brown', avatar: '/placeholder.svg?height=40&width=40&text=CB', status: 'online' },
    { id: 4, name: 'Diana Prince', avatar: '/placeholder.svg?height=40&width=40&text=DP', status: 'away' },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="messaging-app">
      <div className={`contact-list-container ${isMenuOpen ? 'open' : ''}`}>
        <ContactList
          contacts={filteredContacts}
          selectedContact={selectedContact}
          onSelectContact={(contact) => {
            setSelectedContact(contact);
            if (window.innerWidth <= 768) {
              setIsMenuOpen(false);
            }
          }}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <button className="toggle-button" onClick={toggleMenu}>
          {isMenuOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>
      <ChatArea
        selectedContact={selectedContact}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
};

export default MessagingApp;
