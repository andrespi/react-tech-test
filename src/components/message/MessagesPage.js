import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import MessageList from './MessageList';
import PropTypes from 'prop-types';

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

MessagesPage.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {

    return {
        messages: state.messages
    };
}

export default connect(mapStateToProps)(MessagesPage);