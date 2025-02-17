import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Reviews from "./components/Reviews component/Reviews.jsx";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="contSection">
        <img
          src="./assets/img/bg-tablet-pattern.svg"
          className="bg-img-top"
          alt=""
        />
        <Hero />
        <Service />
        <img
          src="./assets/img/bg-tablet-pattern.svg"
          className="bg-img-bottom"
          alt=""
        />
        <Reviews />
      </div>
      {/* "cta" = Call To Action */}
      <div className="cont-cta">
        <h1 className="title-cta">Simplify how your team works today.</h1>
        <button className="btn-cta">Get Started</button>
      </div>
      <Footer />
    </>
  );
}