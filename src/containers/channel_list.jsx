import React, { Component } from 'react';
import { connect } from 'react-redux';


class ChannelList extends Component {

  showChannel = (channel) => {
    const isSelectedChannel = channel === this.props.selectedChannel;
    return (
      <li
        key={channel}
        className={isSelectedChannel ? 'active-channel' : null}
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

export default connect(mapStateToProps, null)(ChannelList);
