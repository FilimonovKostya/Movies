import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Movie from "./Ui/Movie";
import {thunkSetMovies} from "./Redux/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "./Redux/store";
import Preloader from "./Ui/Preloader/Preloader";
import ErrorMessage from "./Ui/ErrorMessage/ErrorMessage";


function App() {
    const dispatch = useDispatch()

    // const poster = useSelector<RootStoreType, string>(state => state.movies.response.Poster)
    // const description = useSelector<RootStoreType, string>(state => state.movies.response.Plot)
    // const title = useSelector<RootStoreType, string>(state => state.movies.response.Title)
    // const rating = useSelector<RootStoreType, string>(state => state.movies.response.imdbRating)
    // const [inputValue, setInputValue] = useState<string>('')
    // const isLoading = useSelector<RootStoreType, boolean>(state => state.app.isLoading)
    // const isError = useSelector<RootStoreType, boolean>(state => state.app.isError)

    const poster =''
    const description =''
    const title =''
    const rating = 'useSelector<RootStoreType, string>(state => state.movies.response.imdbRating)'
    const [inputValue, setInputValue] = useState<string>('')
    const isLoading = useSelector<RootStoreType, boolean>(state => state.app.isLoading)
    const isError = useSelector<RootStoreType, boolean>(state => state.app.isError)

    const onClickHandler = () => {
        dispatch(thunkSetMovies(inputValue))
        setInputValue('')
    }

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return <div>
        {isLoading ? <Preloader/> : null}
        <header>
            <h1>OMDb API</h1>
            <input type="text" placeholder="Search" id="search"
                   value={inputValue}
                   className="search"
                   onChange={onChangeInputValue}
                   onKeyPress={(event => {
                       if (event.key === 'Enter') onClickHandler()
                   })}
            />
            <button onClick={onClickHandler}>Search</button>
        </header>
        <main id="main">
            {title ? <Movie description={description} title={title} poster={poster} rating={rating}/> : null}
        </main>
        {isError ? <ErrorMessage isError={isError}/> : null}
        <footer className="footer">
            <p> Use This <a href="http://www.omdbapi.com/"> API</a></p>
        </footer>
    </div>

}

export default App