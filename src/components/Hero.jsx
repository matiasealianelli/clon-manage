import RedesSociales from './RedesSociales.jsx';
import '/src/styles/Hero.css';

export default function Hero() {
    return (
      <>
        <section className='hero' id='hero'>
        <div className='contInfoHero'>
          <h1 className='title'>
            Bring everyone together to build better products.
          </h1>
          <p className='description'>
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>
          <button className='btnStarted btnHero'>
            Get Started
            </button>
            <RedesSociales />
        </div>
       <img className='graph' src='/assets/img/illustration-intro.svg' alt='illustration-working'/>
        
        </section>
      </>
    )
  }
