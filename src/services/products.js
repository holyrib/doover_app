import React from 'react';
import axios from 'axios';

// const API_URL = 'https://api.doover.tech/api/';

export default axios.create({
    baseURL: 'https://api.doover.tech/api/',
    // params: {
    //     token: localStorage.getItem('user')
    // },
});