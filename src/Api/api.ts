import axios from "axios";

export type RatingResponseType = {
    Source: string
    Value: string
}

export type ResponseType  = {
    Actors: string
    Awards: string
    BoxOffice: string
    Country: string
    DVD: string
    Director: string
    Genre: string
    Language: string
    Metascore: string
    Plot: string
    Poster: string
    Production: string
    Rated: string
    Ratings: RatingResponseType[]
    Released: string
    Response: string
    Runtime: string
    Title: string
    Type: string
    Website: string
    Writer: string
    Year: string
    imdbID: string
    imdbRating: string
    imdbVotes: string
    Error: string
}


const instance = axios.create({
    baseURL: "http://www.omdbapi.com/",
})

const apiKey = '?apikey=fbf45cd4'

export const movieAPI = () => {
    return {
        getByTitle: (title: string) => {
            return instance.get<ResponseType>(`${apiKey}&t=${title}`)
        }
    }
}