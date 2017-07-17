import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageList from './MessageList';

class MessagesPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {messages} = this.props;
        return (
            <div>
                <h1>Messages</h1>
                <MessageList messages={messages}/>
            </div>
        )

    }
}


function mapStateToProps(state) {


    return {
        messages: state.messages
    };
}
/*function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
}*/
export default connect(mapStateToProps)(MessagesPage);