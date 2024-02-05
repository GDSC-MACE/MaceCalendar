import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/hero';
import AboutUs from './Components/AboutUs';
import { SearchBar } from './Components/SearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filter from './Components/filter';
import UpcomingEvents from './Components/UpcomingEvents';
import Footer from "./Components/Footer/Footer";
import 'react-icons/fa';
import Clubs from './Components/Clubs';
function App() {
  return (
    <>
        <>
          <Navbar />
          <Hero />
          <div className="heading-container" id="upcoming-events">
            <h1 className="text-6xl font-extrabold text-black mb-4 mt-8 ">UPCOMING EVENTS</h1>
            
          </div>
        </>

      <div className="App">
        <Filter/>
        <div className='search-bar-container'>
          <SearchBar />
        </div>
      </div>

      <>
        <section className="container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
          <div className="w-full  px-[2.5 rem]">
            <div className="about-cards flex gap-10 flex-col md:flex-row">
              <UpcomingEvents />
            </div>
          </div> 
          <div className="heading-container">
            <h1 className="text-6xl font-extrabold text-black mb-4 mt-8 ">CLUBS</h1>
            
          </div>
          <Clubs/>
        </section>
      </>

      <AboutUs />

      <div>
      <div className="h-screen"></div>
      <Footer />
    </div>
    </>
     
  );
}

export default App;
