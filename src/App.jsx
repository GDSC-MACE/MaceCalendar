import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";
import AboutUs from "./Components/AboutUs";
import UpcomingEvents from "./Components/UpcomingEvents";
import Footer from "./Components/Footer/Footer";
import "react-icons/fa";
import Clubs from "./Components/Clubs";
import ContactUs from "./Components/ContactUs";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <Clubs />
      {/* <AboutUs /> */}
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
