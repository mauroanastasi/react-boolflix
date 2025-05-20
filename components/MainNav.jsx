import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const MainNav = () => {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    const handleSearch = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0450842658618b969d5d58f51db357a6&query=${search}`)
            .then((resp) => {
                console.log(resp.data.results);
                setMovies(resp.data.results);
            })
            .catch((err) => {
                console.error("Errore nella chiamata:", err);
            });
    };

    return (

        <>
            <header>
                <div className="input-group mb-3">
                    <button onClick={handleSearch} className="btn btn-outline-secondary" type="button" id="button-addon1">cerca</button>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Inserisci il film" />
                </div>
            </header>
            <div>
                {movies.map((movie) => {
                    return (
                        <div className="card" key={movie.id}>
                            <h3>{movie.title}</h3>
                            <h3>{movie.original_title}</h3>
                            <h3>{movie.original_language}</h3>
                            <h3>{movie.vote_average}</h3>
                        </div>
                    );
                })}
            </div>

        </>
    )


}

export default MainNav
