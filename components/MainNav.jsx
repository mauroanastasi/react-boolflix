import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MainNav = () => {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const [medias, setMedia] = useState([])


    const handleSearch = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0450842658618b969d5d58f51db357a6&query=${search}`)
            .then((resp) => {
                console.log(resp.data.results);
                setMovies(resp.data.results);
            })

        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=0450842658618b969d5d58f51db357a6&language=it_IT&query=${search}`)
            .then((resp) => {
                console.log(resp.data.results);
                setSeries(resp.data.results);
            })
            .catch((err) => {
                console.error("Errore nella chiamata:", err);
            });
    };

    useEffect(() => {
        setMedia([...movies, ...series])
    }, [movies, series])


    return (

        <>
            <header>
                <div className="input-group mb-3">
                    <button onClick={handleSearch} className="btn btn-outline-secondary" type="button" id="button-addon1">cerca</button>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Inserisci il film" />
                </div>
            </header>
            <div>
                {medias.map((media) => {
                    return (
                        <div className="card" key={`media-${media.id}`}>
                            <h3>{media.title || media.name}</h3>
                            <h3>{media.original_title || media.original_name}</h3>
                            <h3>{media.original_language === 'it' ? (
                                <img src="/itaFlag.png" className='flag' />
                            ) : media.original_language === 'en' ? (
                                <img src="/flagEng.png" className='flag' />
                            ) : media.original_language}
                            </h3>
                            <h3>{media.vote_average}</h3>
                        </div>
                    );
                })}
            </div>

        </>
    )


}

export default MainNav
