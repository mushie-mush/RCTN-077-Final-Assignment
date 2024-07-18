import React, { useContext } from 'react'
import { QueryContext } from './App'

function Search() {
    const { query, setQuery } = useContext(QueryContext)

    return (
        <form className="d-flex" role="search">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Movie's Name" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="btn btn-primary" type="button" onClick={() => setQuery(query)}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    )
}

export default Search