import React from 'react';

const Message = () => {
  return (
    <div className="message">
      <span>{this.props.message.author}</span> -
      <em><small>{this.props.message.created_at}</small></em>
      <p>{this.props.message.content}</p>
    </div>
  );
};

export default Message;
