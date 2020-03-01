import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        // Desestruct
        const { user } = this.props;

        if(!user) {
            return null;
        }

        return <div className="header">{user.name}</div>;
    }
}

//Putting some logic in mapstate , like some computation or filter
//Otherwise you would put so much data on UserHead, it doesnt need all the users
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId)};
}

//1st argument is the map!
export default connect (mapStateToProps, {fetchUser}) (UserHeader);