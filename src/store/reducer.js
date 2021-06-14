import movies from "../movies"
import {DELETE_MOVIE,ADD_MOVIE, UPDATE_MOVIE} from "./actions"


const initialState = {
    movies: movies,
}

const reducer = (state=initialState , action) => {
    switch(action.type){
        case DELETE_MOVIE:
            const deleteMovies = state.movies.filter((movie)=>movie.id !== action.payload.movieId)

            return { 
                ...state,
                movies : deleteMovies,
            }
        case ADD_MOVIE:
            action.payload.newMovie.watched = false;
            action.payload.newMovie.id = state.movies[state.movies.length-1].id+1

            return {
                ...state,
                movies:[...state.movies,action.payload.newMovie]
            }
        case UPDATE_MOVIE:

            const updatedMovie = state.movies.map(movie=>{ if(movie.id===action.payload.updatedMovie.id ) 
                movie.watched=!movie.watched ;
            
            return movie ;
         })
            return {
                ...state,
                movies: updatedMovie,
            }
        default:
            return state
    }
       
}
export default reducer