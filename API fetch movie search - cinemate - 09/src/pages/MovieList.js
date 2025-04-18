import {Card} from '../components';
import {useFetch} from '../hooks/useFetch';

export const MovieList = ({apiPath}) => {
  const {data: movies} = useFetch(apiPath);
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
