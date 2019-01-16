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
        if (response.data['User-Token']){
        // console.log('response is ',response.data['User-Token'])
            localStorage.setItem( 'token',response.data['User-Token']);
            localStorage.setItem('login', login);
            isLoggedIn = true;
            alert('Welcome , you are login...')
            return response.data;
        } else {
            throw new Error( 'Credentials incorrect' );
        }
    })
}

export function logout() {
    localStorage.removeItem( 'token' );
    localStorage.removeItem( 'login' );
    isLoggedIn = false;
}

export function getAuthToken() {
    return localStorage.getItem( 'token' );
}

export function getLoginUser() {
    return localStorage.getItem( 'token' );
}