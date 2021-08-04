import React from 'react';
import useAxios from '../Hooks/useAxios';
import { SEARCH_MOVIE, POSTER_URL } from '../services/api';

const Home = () => {
    const { data, loading, error, request } = useAxios();
    const movie = 'scarface';

    React.useEffect(() => {
        async function fetchSearchMovie() {
            const url = SEARCH_MOVIE(movie);
            const response = await request(url);
        }

        fetchSearchMovie();
    }, [request])

    if (error) return `Error: ${error}`;
    if (loading) return `Loading data...`;
    if(data) console.log(data.results);
    if(data)
    return (
        <div>
            <h1>Your results for: {movie}</h1>
            {data.results.map((movies) => (
                <div key={movies.id}>
                    <img src={POSTER_URL + movies.poster_path} alt="poster" />
                    <p>{movies.title}</p>
                </div>
            ))}
        </div>
        )
        else return null;
}

export default Home;
