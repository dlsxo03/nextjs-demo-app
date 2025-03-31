import Billboard from './components/Billboard';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

const DUMMY_MOVIES = [
  {
    title: '스트레인저 씽스',
    thumbnailUrl: '/images/stranger-things.jpg'
  },
  {
    title: '위쳐',
    thumbnailUrl: '/images/witcher.jpg'
  },
  {
    title: '나의 해방일지',
    thumbnailUrl: '/images/my-liberation-notes.jpg'
  },
  {
    title: '슬기로운 의사생활',
    thumbnailUrl: '/images/hospital-playlist.jpg'
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="인기 콘텐츠" movies={DUMMY_MOVIES} />
        <MovieList title="지금 뜨는 콘텐츠" movies={DUMMY_MOVIES} />
        <MovieList title="내가 찜한 콘텐츠" movies={DUMMY_MOVIES} />
      </div>
    </>
  );
}