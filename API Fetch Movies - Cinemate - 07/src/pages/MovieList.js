import { useEffect, useState } from 'react';
import {Card} from '../components';

export const MovieList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    async function fetchMovies(){
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=deff424e6493a6018dea8d18b2b6ec76");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <div>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap">
            {movies.map((movie) =>(
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
