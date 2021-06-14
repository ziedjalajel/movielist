
import {useState} from "react"
import {addMovie} from "../store/actions"
import {useDispatch} from "react-redux"

const MovieForm =()=>{
    const [movie,setMovie]=useState("");
    const dispatch=useDispatch()

    const handleChange = (event) => {
     setMovie({...movie,[event.target.name]:event.target.value})

    }
    const handleSubmit = (event) => {
        event.preventDefault() 
       
       dispatch(addMovie(movie))
        
    }
    const handleReset = (event) => {
        setMovie({name:""})
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div>
            <input
            value={movie.name}     
            onChange={handleChange} 
            type="text"
            name="name" 
            placeholder="enter movie name"/>
            <input type="submit"
            />
           
            </div>
        </form>
        </div>
       
    )
}
export default MovieForm