import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Movie from "./Movie";
import {thunkSetMovies} from "./Redux/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "./Redux/store";


function App() {
    const dispatch = useDispatch()

    const poster = useSelector<RootStoreType, string>(state => state.movies.Poster)
    const description = useSelector<RootStoreType, string>(state => state.movies.Plot)
    const title = useSelector<RootStoreType, string>(state => state.movies.Title)
    const rating = useSelector<RootStoreType, string>(state => state.movies.imdbRating)
    const [inputValue, setInputValue] = useState<string>('')


    const onClickHandler = () => dispatch(thunkSetMovies(inputValue))

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return <div>
        <header>
            <h1>OMDb API</h1>
            <input type="text" placeholder="Search" id="search"
                   value={inputValue}
                   className="search"
                   onChange={onChangeInputValue}
            />
            <button onClick={onClickHandler}>Search</button>
        </header>
        <main id="main">
            {title ? <Movie description={description} title={title} poster={poster} rating={rating}/> : null}
        </main>
        <footer className="footer">
            <p> Use This <a href="http://www.omdbapi.com/"> API</a></p>
        </footer>
    </div>

}

export default App