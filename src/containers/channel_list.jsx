import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeChannel } from '../actions';


class ChannelList extends Component {
  handleClick = (event) => {
    this.props.changeChannel(event.currentTarget.innerText);
  }

  showChannel = (channel) => {
    const isSelectedChannel = channel === this.props.selectedChannel;
    return (
      <li
        key={channel}
        className={isSelectedChannel ? 'active-channel' : null}
        onClick={this.handleClick}
      >
        {channel}
      </li>
    );
  }

  render() {
    // console.log(this.props.channels);
    return (
      <div className="channel-list">
        <h3><strong>Chat</strong></h3>
        <ul>
          {
            this.props.channels.map((channel) => {
              return this.showChannel(channel);
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeChannel: changeChannel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
