
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MessageForm from './MessageForm';

export class AddMessagePage extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
           <MessageForm
           onChange =''
           onSave=""
           message=""
           />
            )
    }
}

function mapStateToProps(state, ownProps) {
    let message = {id: 'test', message: '', isPrivate: ''}
    return {
        message
    }
}

export default connect(mapStateToProps, null)(AddMessagePage);
