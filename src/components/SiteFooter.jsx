function SiteFooter() {
  return (
    <>
      <footer className="footer-area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h3>
                <img
                  src="/AMME-removebg-preview.png"
                  alt="ICAMME"
                  style={{ height: 110, width: 220 }}
                />
              </h3>
              <p>
                ICAMME - 2026 ,<br />
              </p>
            </div>
            <div
              className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/paper">Call for Paper</a>
                </li>
                <li>
                  <a href="/speakers">Speakers</a>
                </li>
                <li>
                  <a href="/register">Registration</a>
                </li>
                <li>
                  <a href="/committee">Committee</a>
                </li>
                <li>
                  <a href="/contact">Reach Us</a>
                </li>
              </ul>
            </div>
            <div
              className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <h5 className="widget-title">FOLLOW US ON</h5>
              <ul className="footer-social">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/KIITUniversity"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="lni-facebook-filled" />
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/KIITUniversity"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="lni-instagram-filled" />
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
