import axios from 'axios';
import { getAuthToken } from './auth';
const baseUrl = `https://favqs.com/api`;
const Apitoken='Token token="a3973df032794d545d20ad335e4cf07f"';
const quotelistUrl = `${baseUrl}/quotes`;
const userDetailsUrl = `${baseUrl}/users/:login`;


const axiosOptions = {
    timeout: 10000
};

const getAxiosAuthenticatedEnpointOptions = () => ({
    ...axiosOptions, headers: {
        'Authorization':Apitoken,
        'User-Token': 'zHn3g0r86boCqbs5Ui/1Tlvr8QPppXMlnXlj6HIuhQU58fRkk71Y/U+ptb0Nwzr5TKMDJu3EbcPGdlEYhv9bwA=='
    }
});

export function getQuotes() {
    return axios.get( quotelistUrl, {'headers':{ 'Authorization':Apitoken}} )
        .then( response => response.data )
 };
 
 export function getSearchQuotes(query) {
    return axios.get( `${quotelistUrl}?type=tag&filter=${query}`, {'headers':{ 'Authorization':Apitoken}} )
        .then( response => response.data )
 };

 export function getUserDetails() {
     console.log('this is inside get user detail function:',getAuthToken())
    return axios.get( userDetailsUrl, 
        {...axiosOptions,headers: {
        'Authorization': Apitoken,
        'User-Token': `"${getAuthToken()}"`,
        'Content-Type': 'application/json'
        // 'User-Token': `${getAuthToken()}`
         }
        })
        .then( response => 
            // {console.log('response inside get',response.data)})
            response.data )
}



//  https://favqs.com/api/quotes/?filter=funny&type=tag&page=10

//  export function getUserDetails(){
//     return axios.get( userDetailsUrl, getAxiosAuthenticatedEnpointOptions() )
//         .then( response => response.data )}
 