import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <span>{props.message.author}</span> -
      <em><small>{props.message.created_at}</small></em>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
