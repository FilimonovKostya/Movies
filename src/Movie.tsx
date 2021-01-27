import React from 'react';

type MoviePropsType = {
    poster: string
    title: string
    rating: string
    description: string
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
            <h3>{props.title}</h3>
            <span className={getClassByRate(props.rating)}>{props.rating}</span>
        </div>
        <div className="overview">
            <h3>Overview</h3>
            {props.description}
        </div>
    </div>
};

export default Movie;