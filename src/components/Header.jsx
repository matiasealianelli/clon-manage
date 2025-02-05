import "/src/styles/Header.css";

export default function Header() {
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
