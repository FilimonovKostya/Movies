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

    const poster = useSelector<RootStoreType, string>(state => state.movies.Poster)
    const description = useSelector<RootStoreType, string>(state => state.movies.Plot)
    const title = useSelector<RootStoreType, string>(state => state.movies.Title)
    const rating = useSelector<RootStoreType, string>(state => state.movies.imdbRating)
    const isLoading = useSelector<RootStoreType, boolean>(state => state.app.isLoading)
    const isError = useSelector<RootStoreType, string | null>(state => state.app.isError)
    const status = useSelector<RootStoreType, string>(state => state.app.statusGetFilms)
    const year = useSelector<RootStoreType, string>(state => state.movies.Year)
    const imbdId = useSelector<RootStoreType, string>(state => state.movies.imdbID)
    const [titleInput, setTitleInput] = useState<string>('')
    const [yearInput, setYearInput] = useState<string>('')


    const onClickHandler = () => {
        dispatch(thunkSetMovies(titleInput, yearInput))
        setTitleInput('')
        setYearInput('')
    }

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleInput(e.currentTarget.value)
    }

    const onChangeYear = (e: ChangeEvent<HTMLInputElement>) => {
        setYearInput(e.currentTarget.value)
    }

    return <div>
        {isLoading ? <Preloader/> : null}
        <header>
            <h1>OMDb API</h1>
            <input type="text" placeholder="Title" id="search"
                   disabled={isLoading}
                   value={titleInput}
                   className="search"
                   onChange={onChangeInputValue}
                   onKeyPress={(event => {
                       if (event.key === 'Enter') onClickHandler()
                   })}
            />
            <input type="text" placeholder="Year" id="year"
                   disabled={isLoading}
                   value={yearInput}
                   className="search"
                   onChange={onChangeYear}
                   onKeyPress={(event => {
                       if (event.key === 'Enter') onClickHandler()
                   })}
            />
            <a className="rainbow rainbow-5" onClick={onClickHandler}>Search</a>

        </header>
        <main id="main">
            {status === 'success' ? <Movie description={description} title={title} poster={poster} rating={rating} year={year} imdbId={imbdId}/> : null}
        </main>
        {status === 'failed' ? <ErrorMessage isError={isError}/> : null}
        <footer className="footer">
            <p> Use This <a href="http://www.omdbapi.com/" target={'blank'}> API</a></p>
        </footer>
    </div>

}

export default App