import React from 'react';
import { api, API_KEY } from '../services/api';

const Home = () => {
    React.useEffect(() => {
        async function request() {
            const response = await api.get(`/search/movie?api_key=${API_KEY}&query=scarface&page=1`);
            console.log(response.data.results);
        }
        
        request();
    }, [])

    return (
        <div>
            <h1>It's Live!</h1>
        </div>
    )
}

export default Home;
