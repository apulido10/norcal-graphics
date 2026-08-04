import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import FeatureStrip from "./components/Hero/FeatureStrip/FeatureStrip";
export default function Home() {

  
  return (
 <main>
  <Header/>
  <Navigation/>
  <Hero/>
  <FeatureStrip/>
  {/* <Footer/> */}
 </main>
  );
}
