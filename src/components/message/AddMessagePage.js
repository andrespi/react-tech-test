
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


export class AddMessagePage extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                the add Message Page {this.props.message.id}
            </div>
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
