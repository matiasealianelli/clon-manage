import "../../styles/Reviews styles/Reviews.css";
import LoadingCards from "./LoadingCards";
import { Suspense, lazy, useState, useEffect, useRef } from "react";

const ReviewsCard = lazy(() => import("./ReviewsCard"));

export default function Reviews() {
  const [debeCargar, setDebeCargar] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDebeCargar(true);
        } else if (!entry.isIntersecting) {
          setDebeCargar(false);
        }
      },
      { rootMargin: "150px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section id="Reviews" className="Reviews">
        <h1 className="title-reviews">What they´ve sayd</h1>
        <div ref={ref}></div>
        <div style={{ minHeight: "20rem", width: "100%" }}>
          {" "}
          {/* Reserva espacio para el contenido cargado */}
          {debeCargar && (
            <Suspense fallback={<LoadingCards />}>
              <ReviewsCard />
            </Suspense>
          )}
        </div>
        <div className="cont-btn-reviews">
          <button className="btnStarted btn-reviews">Get Started</button>
        </div>
      </section>
    </>
  );
}