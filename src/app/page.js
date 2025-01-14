import '../../public/sass/pages/home.scss';
import Home_connect from './components/Home_connect';
import Home_hero from './components/Home_hero';
import Scroll_star from './components/scroll_star';
export default function Home() {
  return (
    <>
        <div className="section" id='section'>
          <Home_hero/>
          <Home_connect/>
        </div>
        <Scroll_star />
    </>
  );
}
