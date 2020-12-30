import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import fetchMessages from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages('general');
  }

  render() {
    return (
      <div className="message_list">
        <div className="name">
          <h1>Channel #{this.props.selectedChannel}</h1>
        </div>
        <div className="messages">
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
