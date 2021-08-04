import axios from 'axios';

export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = process.env.REACT_APP_API_KEY;

export const api = axios.create({
    baseURL: API_URL,
});

export function SEARCH_MOVIE() {

};

export function GET_TRENDING() {
    
};

export function GET_TOP_RATED() {

};

export function GET_UPCOMING() {

};

export function GET_MOVIE() {

};

export function GET_CAST() {

};

export function GET_MOVIE_BY_GENRE() {

};