import MovieCard from './MovieCard';

interface MovieListProps {
  title: string;
  movies: Array<{
    title: string;
    thumbnailUrl: string;
  }>;
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              thumbnailUrl={movie.thumbnailUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;