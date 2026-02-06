import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import brandLogo from "../assets/AMME-removebg-preview.png";
import kiitLogo from "../assets/logokiit.png";
import newcastleLogo from "../assets/logonewcastle.png";
import iitbbsrLogo from "../assets/iitbbsrlogo.png";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Call for Paper", href: "/paper" },
  { label: "Speakers", href: "/speakers" },
  { label: "Registration", href: "/register" },
  { label: "Committee", href: "/committee" },
  { label: "Reach Us", href: "/contact" },
];

const PARTNER_LOGOS = [
  {
    href: "https://kiit.ac.in/",
    src: kiitLogo,
    alt: "KIIT",
    className: "logo logo-kiit",
  },
  {
    href: "https://www.ncl.ac.uk/singapore/",
    src: newcastleLogo,
    alt: "Newcastle University Singapore",
    className: "logo logo-newcastle",
    ariaLabel: "Newcastle University in Singapore",
  },
  {
    href: "http://www.iitbbs.ac.in/",
    src: iitbbsrLogo,
    alt: "IIT Bhubaneswar",
    className: "logo logo-iitbbsr",
    ariaLabel: "IIT Bhubaneswar",
  },
];

function SiteHeader({ children }) {
  const location = useLocation();
  const toggleRef = useRef(null);
  const collapseRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const navClass =
    "navbar navbar-expand-lg fixed-top scrolling-navbar navbar-glass";

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const toggle = toggleRef.current;
      if (!toggle || !toggle.checked) return;
      if (collapseRef.current?.contains(event.target)) return;
      if (toggleRef.current?.contains(event.target)) return;
      if (toggleBtnRef.current?.contains(event.target)) return;
      toggle.checked = false;
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <header id="header-wrap">
      <nav className={navClass}>
        <div className="container-fluid">
          <input
            ref={toggleRef}
            className="nav-toggle"
            id="nav-toggle"
            type="checkbox"
          />
          <div className="navbar-header">
            <div className="navbar-header-right">
              <label
                ref={toggleBtnRef}
                className="nav-toggle-btn"
                htmlFor="nav-toggle"
                aria-label="Toggle menu"
              />
              <Link to="/" className="navbar-brand">
                <img src={brandLogo} alt="ICAMME" />
              </Link>
            </div>
          </div>

          <div ref={collapseRef} className="navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mx-auto">
              {NAV_ITEMS.map((item) => {
                const itemHash = item.href.startsWith("/#")
                  ? item.href.slice(1)
                  : "";
                const isHomePath =
                  location.pathname === "/" ||
                  location.pathname === "/index.html";
                const isActive =
                  (itemHash && isHomePath && location.hash === itemHash) ||
                  (!itemHash && location.pathname === item.href);
                return (
                  <li
                    className={`nav-item${isActive ? " active" : ""}`}
                    key={item.label}
                  >
                    <Link className="nav-link" to={item.href}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="navbar-right-logo" aria-label="Partner logos">
            {PARTNER_LOGOS.map((logo) => (
              <a
                key={logo.href}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                aria-label={logo.ariaLabel}
              >
                <img className={logo.className} src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="navbar-secondary" aria-label="Partner logos">
        <div className="navbar-right-logo--mobile">
          {PARTNER_LOGOS.map((logo) => (
            <a
              key={`${logo.href}-mobile`}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              aria-label={logo.ariaLabel}
            >
              <img className={logo.className} src={logo.src} alt={logo.alt} />
            </a>
          ))}
        </div>
      </div>
      {children}
    </header>
  );
}

export default SiteHeader;
