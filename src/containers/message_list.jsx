import React from 'react';
import Message from '../components/message';

const MessageList = () => {
  return (
    <div className="message_list">
      <h1>Channel #general</h1>
      <Message />
      <Message />
    </div>
  );
};

export default MessageList;
