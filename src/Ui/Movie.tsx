import React from 'react';

type MoviePropsType = {
    poster: string
    title: string
    rating: string
    description: string
    year: string
    imdbId: string
}

const Movie = (props: MoviePropsType) => {

    const getClassByRate = (vote: string) => {
        if (+vote >= 7.5) return "green";
        else if (+vote >= 7) return "orange";
        else return "red";
    };

    return <div className="movie">
        <img src={props.poster} alt={props.title}/>
        <div className="movie-info">
            <h3>{props.title}   </h3>
            <div className={'test'}><span> Year : {props.year} </span>
                <span className={getClassByRate(props.rating)}>{props.rating}</span>
            </div>
        </div>
        <div className="overview">
            <h3>Overview</h3>
            {props.description}
            <a href={`https://www.imdb.com/title/${props.imdbId}/`} target={'blank'} className="rainbow rainbow-1">Watch </a>
        </div>
    </div>
};

export default Movie;