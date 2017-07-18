import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../actions/messageActions';
import MessageForm from './MessageForm';


export class AddMessagePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: Object.assign({}, props.message)
        };

        this.updateMessageState = this.updateMessageState.bind(this);
        this.saveMessage = this.saveMessage.bind(this);
    }

    updateMessageState(event) {
        const field = event.target.name;
        let message = Object.assign({}, this.state.message);
        message[field] = event.target.type === 'checkbox' ? event.target.checked :event.target.value;
        return this.setState({message: message});
    }

    redirect() {
        this.props.router.push('/')
    }

    saveMessage(event) {
        event.preventDefault();
        this.props.actions.addMessage(this.state.message)
            .then(() => this.redirect())
    }

    render(){
        return (
            <MessageForm
                onChange={this.updateMessageState}
                onSave={this.saveMessage}
                message={this.state.message}
            />
        )
    }
}

AddMessagePage.propTypes = {
    message: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let message = {id: 'test', message: '', isPrivate: ''}
    return {
        message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(messageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMessagePage);
