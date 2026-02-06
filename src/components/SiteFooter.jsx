import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import brandLogo from "../assets/AMME-removebg-preview.png";

function SiteFooter() {
  return (
    <>
      <footer className="footer-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <h3>
                <Link to="/">
                  <img
                    src={brandLogo}
                    alt="ICAMME"
                    style={{ width: 220, height: "auto" }}
                  />
                </Link>
              </h3>
              <p>
                ICAMME - 2026 ,<br />
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/paper">Call for Paper</Link>
                </li>
                <li>
                  <Link to="/speakers">Speakers</Link>
                </li>
                <li>
                  <Link to="/register">Registration</Link>
                </li>
                <li>
                  <Link to="/committee">Committee</Link>
                </li>
                <li>
                  <Link to="/contact">Reach Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <h5 className="widget-title">FOLLOW US ON</h5>
              <ul className="footer-social">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/KIITUniversity"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebookF aria-hidden="true" focusable="false" />
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/KIITUniversity"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram aria-hidden="true" focusable="false" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-info">
                <p>
                  Designed and Developed by{" "}
                  <a href="http://kiit.ac.in/" rel="nofollow">
                    KIIT University
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteFooter;
