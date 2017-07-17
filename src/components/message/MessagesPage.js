import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import MessageList from './MessageList';

class MessagesPage extends Component {
    constructor(props) {
        super(props);

        this.redirectToAddMessagePage = this.redirectToAddMessagePage.bind(this);
    }


    redirectToAddMessagePage() {
        browserHistory.push('/message');
    }

    render() {
        const {messages} = this.props;
        return (
            <div>
                <h1>Messages</h1>
                <MessageList messages={messages}/>
                <input type="submit"
                       value="Ajouter un message"
                       className="btn btn-primary"
                       onClick={this.redirectToAddMessagePage}/>
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