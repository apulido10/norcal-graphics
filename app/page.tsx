import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import FeatureStrip from "./components/Hero/FeatureStrip/FeatureStrip";
import Categories from "./components/Categories/Categories";
import QuoteCTA from "./components/QuoteCTA/QuoteCTA";
export default function Home() {

  
  return (
 <main>
  <Header/>
  <Navigation/>
  <Hero/>
  <FeatureStrip/> 
  <Categories/>
  <QuoteCTA/>
  {/* <Footer/> */}
 </main>
  );
}
