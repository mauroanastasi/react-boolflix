import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const MainNav = () => {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    const handleSearch = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0450842658618b969d5d58f51db357a6&query=${search}`).then((resp) => {
            setMovies(resp.data)
        })
    }

    return (


        <header>
            <div className="input-group mb-3">
                <button onClick={handleSearch} className="btn btn-outline-secondary" type="button" id="button-addon1">cerca</button>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Inserisci il film" />
            </div>
        </header>
    )

}

export default MainNav
