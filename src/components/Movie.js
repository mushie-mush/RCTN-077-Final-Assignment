import React from 'react'

function Movie({ movie }) {
    return (
        <div className="card mb-3" style={{ width: "14rem" }}>
            <img src={movie.Poster} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
            </div>
        </div>
    )
}

export default Movie