/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createContext, useEffect, useReducer, useState } from 'react'
import Movie from './Movie'
import Header from './Header'

export const QueryContext = createContext({})

const DEFAULT_FAVORITES = [
    {
        "Title": "Iron Man",
        "Year": "2008",
        "imdbID": "tt0371746",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
    },
    {
        "Title": "Iron Man 3",
        "Year": "2013",
        "imdbID": "tt1300854",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Iron Man 2",
        "Year": "2010",
        "imdbID": "tt1228705",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
    },
    {
        "Title": "Spider-Man",
        "Year": "2002",
        "imdbID": "tt0145487",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    },
    {
        "Title": "Man of Steel",
        "Year": "2013",
        "imdbID": "tt0770828",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.movies
        case 'SHOW_FAVORITES':
            return DEFAULT_FAVORITES
        default:
            return state;
    }
}

function App() {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useReducer(reducer, DEFAULT_FAVORITES)

    useEffect(() => {
        if (query.length > 0) {
            fetchMovies(query)
        } else {
            showFavorites()
        }
    }, [query])

    const fetchMovies = async (query) => {
        const movies = await fetch(`https://www.omdbapi.com/?apikey=946cf69&s=${query}`).then(res => res.json()).then(data => data.Search)
        setMovies({ type: 'SET_MOVIES', movies })
    }

    const showFavorites = () => {
        setMovies({ type: 'SHOW_FAVORITES' })
    }

    return (
        <QueryContext.Provider value={{ query, setQuery }}>
            <main className='app rounded shadow'>
                <Header title="FinProH8" />
                <div className='container my-3'>
                    <h2>Show your favorite movies</h2>
                    <div className='d-flex flex-wrap justify-content-between my-3'>
                        {movies?.map(movie => (
                            <Movie movie={movie} key={movie.imdbID}></Movie>
                        ))}
                        {!movies && (
                            <div class="alert alert-danger w-100 my-auto" role="alert">
                                No movies found! <a href='#' className='link-underline-primary' onClick={() => showFavorites()}>Show favorites</a>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </QueryContext.Provider>
    )
}

export default App