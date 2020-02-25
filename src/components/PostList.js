import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

    //Calling a props passed function after component get rendered
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>Post List</div>
    }
}

//The first arguments is always state to props, null if you don't have it yet
export default connect(null,{ fetchPosts })(PostList);