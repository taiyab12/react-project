import axios from 'axios';
import { getAuthToken } from './auth';
const baseUrl = `https://favqs.com/api`;
const Apitoken='Token token="a3973df032794d545d20ad335e4cf07f"';
const quotelistUrl = `${baseUrl}/quotes`;


const axiosOptions = {
    timeout: 10000
};

const getAxiosAuthenticatedEnpointOptions = () => ({
    ...axiosOptions, headers: {
        'x-nl-auth': getAuthToken()
    }
});

export function getQuotes() {
    return axios.get( quotelistUrl, {'headers':{ 'Authorization':Apitoken}} )
        .then( response => response.data )
 };
 
 export function getSearchQuotes(query) {
    return axios.get( `quotelistUrl?type=tag&filter=${query}`, {'headers':{ 'Authorization':Apitoken}} )
        .then( response => response.data )
 };


//  https://favqs.com/api/quotes/?filter=funny&type=tag&page=10

//  export function getSearchMoviesList(query){
//     return axios.get( `${searchMovieUrl}?${apiKey}&query=${query}&page=1`, getAxiosAuthenticatedEnpointOptions() )
//         .then( response => response.data )
// }