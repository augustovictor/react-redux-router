import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

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

export function fetchPost(id) {
    const result = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: result
    };
};

export function deletePost(id, callback) {
    const result = axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}