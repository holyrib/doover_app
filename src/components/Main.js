import React, {useEffect, useState} from "react";
import products from "../services/products";
import  AuthService from "../services/auth";

const Main = () => {

    useEffect(() => {
        const token = localStorage.getItem('user').slice(1,-1);
        console.log(localStorage.getItem('user'));
        const response = products.get('products/categories/', {
            // mode: 'no-cors',
            headers: {
                "Authorization": `Bearer ${token}`,
                // 'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response.data);
        });
    }, []);

    return (
        <div>yo</div>
    );

}



export default Main;