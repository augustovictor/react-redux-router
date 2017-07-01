import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params; // From react-router and it allows us to have many wildcards in a given url. E.g., /:id/:name
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    
    render() {
        const { post } = this.props;
        if(!post) return <div>Loading...</div>
        return(
            <div>
                <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete</button>
                <h3>{ post.title }</h3>
                <h6>{ post.categories }</h6>
                <p>{ post.content }</p>
            </div>
        );
    }
};

function mapStateToProps({ posts }, ownProps) { // ownProps = props object going to this component PostsShow
    return { post: posts[ownProps.match.params.id] }; // Gets only the post
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);