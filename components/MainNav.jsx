import React from 'react'
import { useState } from 'react'

const MainNav = () => {
    const [search, setSearch] = useState("")
    return (

        <header>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">cerca</button>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Inserisci il film" />
            </div>
        </header>
    )
}

export default MainNav
