
export const DELETE_MOVIE = "DELETE_MOVIE"
export const ADD_MOVIE = "ADD_MOVIE"
export const UPDATE_MOVIE = "UPDATE_MOVIE"


export const deleteMovie = (movieId) => {

    return {
        type: DELETE_MOVIE,
        payload:{ movieId }
    }
    
}
export const addMovie = (newMovie) => {
return {
    type : ADD_MOVIE ,
    payload : {newMovie}
}
}
export const updateMovie = (updatedMovie) => {

    return {
        type : UPDATE_MOVIE,
        payload : {updatedMovie}
    }
}