import React from 'react';
import { Search } from 'lucide-react';
import '../styles/ContactList.css';

const ContactList = ({ contacts, selectedContact, onSelectContact, searchTerm, onSearchChange }) => {
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      <div className="search-container">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className={`contact-item ${selectedContact === contact ? 'selected' : ''}`}
            onClick={() => onSelectContact(contact)}
          >
            <div className="avatar-container">
              <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
              <span className={`status-indicator ${contact.status}`}></span>
            </div>
            <div className="contact-info">
              <span className="contact-name">{contact.name}</span>
              <span className={`contact-status ${contact.status}`}>{contact.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
