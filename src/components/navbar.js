import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PostsIndex from '../components/post_index';
import PostsNew from '../components/post_new';

export default (props) => {
    return(
        <BrowserRouter>
            <div>
                Header
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/" component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};