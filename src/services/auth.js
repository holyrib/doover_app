import React from 'react';
import axios from 'axios';

const API_URL = 'https://api.doover.tech/api/';
const login = (email, password) => {
    return axios
        .post(API_URL + "token/", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.access) {
                localStorage.setItem("user", JSON.stringify(response.data.access));
            }
            return response.data;
        });
};


const logout = () => {
    localStorage.removeItem("user");
};
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    login,
    logout,
    getCurrentUser
};