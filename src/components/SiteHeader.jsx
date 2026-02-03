import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Call for Paper', href: '/paper' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Registration', href: '/register' },
  { label: 'Commitee', href: '/committee' },
  { label: 'Reach Us', href: '/contact' },
]

function SiteHeader({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navClass = 'navbar navbar-expand-lg fixed-top scrolling-navbar navbar-glass'
  const navItems = NAV_ITEMS

  return (
    <header id="header-wrap">
      <nav className={navClass}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="main-navbar"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="navbar-toggler-icon" />
              <span className="icon-menu" />
              <span className="icon-menu" />
              <span className="icon-menu" />
            </button>
            <a href="/" className="navbar-brand">
              <img src="/AMME-removebg-preview.png" alt="ICAMME" />
            </a>
          </div>
          <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="main-navbar">
            <button
              className="mobile-menu-close"
              type="button"
              aria-label="Close navigation"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <ul className="navbar-nav mx-auto">
              {navItems.map((item) => {
                const itemHash = item.href.startsWith('/#') ? item.href.slice(1) : ''
                const isHomePath = location.pathname === '/' || location.pathname === '/index.html'
                const isActive =
                  (itemHash && isHomePath && location.hash === itemHash) ||
                  (!itemHash && location.pathname === item.href)
                return (
                  <li className={`nav-item${isActive ? ' active' : ''}`} key={item.label}>
                  <a className="nav-link" href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                </li>
                )
              })}
            </ul>
            <div className="mobile-partner-logos" aria-label="Partner logos">
              <a href="https://kiit.ac.in/" target="_blank" rel="noreferrer">
                <img className="logo logo-kiit" src="/logokiit.png" alt="KIIT" />
              </a>
              <a
                href="https://www.ncl.ac.uk/singapore/"
                target="_blank"
                rel="noreferrer"
                aria-label="Newcastle University in Singapore"
              >
                <img className="logo logo-newcastle" src="/logonewcastle.png" alt="Newcastle University Singapore" />
              </a>
              <a href="http://www.iitbbs.ac.in/" target="_blank" rel="noreferrer" aria-label="IIT Bhubaneswar">
                <img className="logo logo-iitbbsr" src="/iitbbsrlogo.png" alt="IIT Bhubaneswar" />
              </a>
            </div>
          </div>
          <div className="navbar-right-logo" aria-label="Partner logos">
            <a href="https://kiit.ac.in/" target="_blank" rel="noreferrer">
              <img className="logo logo-kiit" src="/logokiit.png" alt="KIIT" />
            </a>
            <a
              href="https://www.ncl.ac.uk/singapore/"
              target="_blank"
              rel="noreferrer"
              aria-label="Newcastle University in Singapore"
            >
              <img className="logo logo-newcastle" src="/logonewcastle.png" alt="Newcastle University Singapore" />
            </a>
            <a href="http://www.iitbbs.ac.in/" target="_blank" rel="noreferrer" aria-label="IIT Bhubaneswar">
              <img className="logo logo-iitbbsr" src="/iitbbsrlogo.png" alt="IIT Bhubaneswar" />
            </a>
          </div>
        </div>
      </nav>
      {children}
    </header>
  )
}

export default SiteHeader
