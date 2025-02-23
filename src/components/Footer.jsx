import "/src/styles/Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="cont-cols-footer">
          <div className="col1-footer">
            <img
              src="./assets/img/logo-white.svg"
              className="logo-footer"
              alt="Logo Manage Footer"
            />
            <div className="cont-redes-footer">
              <a href="#" target="_blank" className="icon-footer linkIcon">
                <img
                  className="icon-footer"
                  src="./assets/img/icon-facebook.svg"
                  alt="icono-facebook"
                />
              </a>
              <a href="#" target="_blank" className="icon-footer linkIcon">
                <img
                  className="icon-footer"
                  src="./assets/img/icon-youtube.svg"
                  alt="icono-youtube"
                />
              </a>
              <a href="#" target="_blank" className="icon-footer linkIcon">
                <img
                  className="icon-footer"
                  src="./assets/img/icon-twitter.svg"
                  alt="icono-twitter"
                />
              </a>
              <a href="#" target="_blank" className="icon-footer linkIcon">
                <img
                  className="icon-footer"
                  src="./assets/img/icon-pinterest.svg"
                  alt="icono-pinterest"
                />
              </a>
              <a href="#" target="_blank" className="icon-footer linkIcon">
                <img
                  className="icon-footer"
                  src="./assets/img/icon-instagram.svg"
                  alt="icono-instagram"
                />
              </a>
            </div>
          </div>
          <div className="col2-footer">
            <ul>
              <li>
                <a className="link-footer" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="link-footer" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="link-footer" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="link-footer" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="link-footer" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="link-footer" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="link-footer" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col3-footer">
            <div className="cont-input-footer">
              <input
                type="email"
                className="input-email-footer"
                name="email"
                id="email"
                placeholder="Updates in your inbox..."
              />
              <button className="btn-footer">Go</button>
            </div>
          </div>
        </div>
        <div className="col4-footer">
          <p className="copy-legal">© Copyright 2025. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}