import React from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';

const MessageList = () => {
  return (
    <div className="message_list">
      <div className="name">
        <h1>Channel #general</h1>
      </div>
      <div className="messages">
        {
          this.props.messages.map((message) => {
            return <Message key={message.created_at} message={message} />;
          })
        }
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, null)(MessageList);
