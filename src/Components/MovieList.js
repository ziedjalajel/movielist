
import MovieItem from "./MovieItem";
import { useState } from "react";
import {useSelector} from "react-redux"





const MovieList = (props) => {
  const [unWatchedQuery, setUnWatchedQuery] = useState("");
  const [watchedQuery, setWatchedQuery] = useState("");
  const movies = useSelector((state)=>state.movies)
  const WatchList = movies
  .filter((movie)=>(movie.name.toLowerCase().includes(unWatchedQuery.toLowerCase())&& !movie.watched))
  .map((movie)=>(<MovieItem movie={movie} key={movie.id}/>))
  const WatchedList = movies
  .filter((movie)=>(movie.name.toLowerCase().includes(watchedQuery.toLowerCase())&& movie.watched))
  .map((movie)=>(<MovieItem movie={movie} key={movie.id}/>))
  return (
    <div>
      <h2>Watch List : 
           {WatchList.length}
      </h2>
      <table>
        <thead>
        <th>
          <input onChange={(event)=>setUnWatchedQuery(event.target.value)}></input>
        </th>
        </thead>
        <tbody>
          <tr>
            {WatchList}
          </tr>
        </tbody>
      </table>
      <h2>Watched : 
         {WatchedList.length}
      </h2>
      <table>
        <thead>
        <th>
          <input onChange={(event)=>setWatchedQuery(event.target.value)}></input>
        </th>
        </thead>
        <tbody>
          <tr>
            {WatchedList}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;