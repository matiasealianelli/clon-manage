import "/src/styles/Header.css";

export default function Header() {
  let lastScrollTop = 0;
  window.addEventListener('scroll', function () {
    let st = document.documentElement.scrollTop;
    if (st === 0) {
      // Desplazamiento hacia abajo
      document.querySelector('header').style.backgroundColor = 'transparent';
    }
    else if (st < lastScrollTop) {
      // Desplazamiento hacia arriba
      document.querySelector('header').style.backgroundColor = '#ffffff';
    }else if (st > lastScrollTop) {
      document.querySelector('header').style.backgroundColor = '#ffffff';
      document.querySelector('header').style.transition = 'all 0.3s linear';
    }
    lastScrollTop = st <= 0 ? 0 : st; // Para evitar que el valor sea negativo
});
  return (
    <>
      <header>
        <img className="logo" src="./assets/img/logo.svg" alt="logo manage" />
        <img
          className="iconMenu"
          src="./assets/img/icon-hamburger.svg"
          alt="menu"
          onClick={() => {
            const iconMenu = document.querySelector(".iconMenu");
            const iconClose = document.querySelector(".iconClose");
            const nav = document.querySelector("nav");
            // const btn = document.querySelector(".btnStarted");
            if (window.matchMedia("(max-width: 767px)").matches) {
              iconMenu.addEventListener("click", () => {
                nav.classList.add("active");
                iconMenu.style.display = "none";
                iconClose.style.display = "block";
              });
              iconClose.addEventListener("click", () => {
                nav.classList.remove("active");
                iconClose.style.display = "none";
                iconMenu.style.display = "block";
              });
              document.querySelectorAll("nav a").forEach((link) => {
                link.addEventListener("click", () => {
                  nav.classList.remove("active");
                  iconClose.style.display = "none";
                  iconMenu.style.display = "block";
                });
              });
            }
          }}
        />
        <img
          className="iconClose"
          src="./assets/img/icon-close.svg"
          alt="close-menu"
        />
        <nav>
          <a href="#" className="link">
            Pricing
          </a>
          <a href="#" className="link">
            Product
          </a>
          <a href="#" className="link">
            About Us
          </a>
          <a href="#" className="link">
            Careers
          </a>
          <a href="#" className="link">
            Community
          </a>
        </nav>
        <button className="btnStarted">Get Started</button>
      </header>
    </>
  );
}
