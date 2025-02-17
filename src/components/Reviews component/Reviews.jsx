import "/src/styles/Reviews styles/Reviews.css";
import ReviewsCards from "./ReviewsCard";
export default function Reviews() {
  return (
    <>
      <section id="Reviews" className="Reviews">
        <h1 className="title-reviews">What they´ve sayd</h1>
        < ReviewsCards />
        <div className="cont-btn-reviews">
          <button className="btnStarted btn-reviews">Get Started</button>
        </div>
      </section>
    </>
  );
}