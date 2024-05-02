import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Catagories from "./components/Catagories";
import Campains from "./components/Campains";
import Favoriets from "./components/Favoriets";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Fouter from "./components/Fouter";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Catagories />
      <Campains />
      <Favoriets />
      <div className="container mx-auto">
        <MobileApp />
        <Cards />
        <Fouter />
      </div>
    </>
  );
}

export default App;
