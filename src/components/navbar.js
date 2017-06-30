import { Link } from 'react-router-dom';
export default (props) => {
    return(
        <div>
            <Link to="/">Posts</Link>
            <Link to="/posts/new">Add post</Link>
        </div>
    );
};