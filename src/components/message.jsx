import React from 'react';

const Message = (props) => {
  const time = new Date(props.message.created_at).toLocaleTimeString();
  return (
    <div className="message">
      <span>{props.message.author}</span> -
      <em><small>{time}</small></em>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
