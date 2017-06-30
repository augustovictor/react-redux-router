import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=AUGUSTOVICTOR123';

export function fetchPosts() {
    const result = axios.get(`${BASE_URL}/posts${API_KEY}`);
    
    return {
        type: FETCH_POSTS,
        payload: result
    };
};