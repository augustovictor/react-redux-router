import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    };

    renderPosts() {
        return _.map(this.props.posts, post => {
            return <li key={post.id} className="list-group-item">{post.title}</li>
        });
    };
    
    render() {
        console.log(this.props.posts);
        return(
            <div>
                <div className="text-xs-righ">
                    <Link to="/posts/new" className="btn btn-primary">Add a post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    };
};

// When we want to consume anything from application level STATE we need this
function mapStateToProps({ posts }) {
    return { posts };
};

function mapDispatchToProps(dispatch) {
    bindActionCreators({ fetchPosts }, dispatch);
}

//export default connect(null, mapDispatchToProps)(PostIndex);
export default connect(mapStateToProps, { fetchPosts })(PostIndex);