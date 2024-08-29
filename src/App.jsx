import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import Videos from "./components/Videos";
import WorkFlow from "./components/WorkFlow";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Header  />
        <Videos />
        <Feature />
       <WorkFlow />
       <Prices />
       <Testimonials />
       <Footer />
      </div>
    </>
  );
}

export default App;
