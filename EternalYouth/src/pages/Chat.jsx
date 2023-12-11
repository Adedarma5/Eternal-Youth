// Chat.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegPaperPlane } from 'react-icons/fa'; // Import icon from react-icons library

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const currentTime = getCurrentTime();
      setMessages([...messages, { text: newMessage, sender: 'user', time: currentTime }]);
      setNewMessage('');
      // Tambahkan logika untuk menanggapi pesan dari bot atau teman chat di sini
    }
  };

  return (
    <div className="chat-app" style={{ backgroundColor: '#EAD7BB' }}>
    <div className="sidebar">
      <Link to="/Chat">
        <button className="back-button">{'<'} Kembali</button>
      </Link>
      <h3 className="judul-chat">Chats</h3>
      <div className="chat-list">
        <div className="chat-item active">
          <img src="/foto-chat.png" alt="Chat" />
          <div >
            <span className="chat-info" >dr. Siska Mante</span>
            {messages.length > 0 && (
              <span className="last-message-time">
                {messages[messages.length - 1].time}  
              </span>
            )}
          </div>
        </div>
        <div className="chat-item active-pertama">
          <img src="/foto-chat2.png" alt="Chat-pertama" />
          <div >
            <span className="chat-info2">dr. Ratna Santika</span>
          </div>
        </div>
        {/* Tambahkan item chat lainnya sesuai kebutuhan */}
      </div>
    </div>

    <div className="chat-container">
      <div className="chat-header">
        <img
          src="/foto-chat.png" // Ganti dengan URL foto profil teman chat
          alt="Friend"
        />
        <span className='text-header'>dr. Siska Mante</span>
        <span className='kode'>Kode Konsultasi: 2217</span>
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <span className="message-text">{message.text}</span>
            <span className="message-time">{message.time}</span>
          </div>
        ))}
      </div>
      <div className="input-container" style={{ backgroundColor: '#113946' }}>
        <input
          className='box-pesan'
          type="text"
          placeholder="Tulis Pesan"
          value={newMessage}
          onChange={handleInputChange}
        />
        <a className="send-button" onClick={handleSendMessage}>
          <FaRegPaperPlane />
        </a>
      </div>
    </div>
  </div>
  );
};

export default Chat;
