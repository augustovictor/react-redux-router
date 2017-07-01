import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=AUGUSTOVICTOR123';

export function fetchPosts() {
    const result = axios.get(`${BASE_URL}/posts${API_KEY}`);
    
    return {
        type: FETCH_POSTS,
        payload: result
    };
};

export function createPost(values, callback) {
    const result = axios.post(`${BASE_URL}/posts${API_KEY}`, values)
        .then(() => callback());
    return {
        type: CREATE_POST,
        payload: result
    };
}