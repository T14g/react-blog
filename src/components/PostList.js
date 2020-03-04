import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';


class PostList extends React.Component {

    //Calling a props passed function after component get rendered
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />

                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }

}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

//The first arguments is always state to props, null if you don't have it yet
export default connect(mapStateToProps,{ fetchPostsAndUsers })(PostList);