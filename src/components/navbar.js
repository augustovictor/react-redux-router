import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PostsIndex from '../components/posts_index';
import PostsNew from '../components/posts_new';

export default (props) => {
    return(
        <BrowserRouter>
            <div>
                <Link to="/" className="btn btn-primary">Posts</Link>
                <Link to="/posts/new" className="btn btn-primary">Add a post</Link>
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/" component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};