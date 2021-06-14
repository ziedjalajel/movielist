import {useDispatch} from "react-redux"
import { deleteMovie, updateMovie } from "../store/actions";

const MovieItem = (props) => {
  const movie = props.movie;
  const dispatch = useDispatch()

  return (
    <tr>
      <td>
        {movie.name}
      </td>
      <td>
        <button onClick={()=>{dispatch(updateMovie(movie))}}>{movie.watched?"Unwatch":"Watch"}</button>
      </td>
      <td> 
        <button onClick={()=>{dispatch(deleteMovie(movie.id))}}>Delete</button>
      </td>
    </tr>
  );
};

export default MovieItem;