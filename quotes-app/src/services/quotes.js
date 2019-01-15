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
 



