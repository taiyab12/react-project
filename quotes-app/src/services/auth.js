import axios from 'axios';

const baseUrl = `https://favqs.com/api`;
const Apitoken='Token token="a3973df032794d545d20ad335e4cf07f"';
const loginUrl = `${baseUrl}/session`;


const axiosOptions = {
    timeout: 10000
};

export let isLoggedIn = localStorage.getItem( 'authToken' );

export function login( credentials ) {
    return axios.post( loginUrl, { 
        "user": {
          "login": credentials["email"],
          "password": credentials["password"]
        }
      }, {
        ...axiosOptions,
        headers: {
            'Authorization': Apitoken,
            'Content-Type': 'application/json'
        }
    })
    .then( response => {
        if( response.data.authToken ) {
            localStorage.setItem( 'email', response.data.email );
            localStorage.setItem( 'authToken', response.data.authToken );
            isLoggedIn = true;
            return response.data;
        } else {
            return new Error( 'Credentials incorrect' );
        }
    })
}

export function logout() {
    localStorage.removeItem( 'email' );
    localStorage.removeItem( 'authToken' );
    isLoggedIn = false;
}

export function getAuthToken() {
    return localStorage.getItem( 'authToken' );
}