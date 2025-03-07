import '../../public/sass/pages/home.scss';
import Home_book_call from './components/Home_book_call';
import Home_cards_section from './components/Home_cards_section';
import Home_choose from './components/Home_choose';
import Home_connect from './components/Home_connect';
// import Home_counter from './components/Home_counter';
import Home_hero from './components/Home_hero';
import Home_industry from './components/Home_industry';
import Home_service_banner from './components/Home_service_banner';
import Home_trust from './components/Home_trust';
import Solution_calender from './components/Solution_calender';
export default function Home() {
    const comp = [
        Home_hero, Home_service_banner, Home_cards_section, Home_book_call, Home_trust, Home_choose, Home_industry, Home_connect, Solution_calender
    ]
    return (
        <>
            {
                comp && comp.map((Section, index) => (
                    <Section key={index} id={`section_${index + 1}`} />
                ))
            }
        </>
    );
}
