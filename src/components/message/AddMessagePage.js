
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
                the add Message Page
            </div>
            )
    }

}


function mapStateToProps(state, ownProps) {
    let message = {id: '', message: '', isPrivate: ''}
    return {
        message
    }
}



export default connect(mapStateToProps, null)(AddMessagePage);
