import '../../public/sass/pages/home.scss';
import Home_book_call from './components/Home_book_call';
import Home_connect from './components/Home_connect';
import Home_hero from './components/Home_hero';
import Home_service_banner from './components/Home_service_banner';
import Home_trust from './components/Home_trust';
import Scroll_star from './components/scroll_star';
export default function Home() {
  return (
    <>
        <div className="section" id='section'>
          <Home_hero/>
          <Home_connect/>
          <Home_service_banner/>
          <Home_book_call/>
          <Home_trust/>
        </div>
        <Scroll_star />
    </>
  );
}
