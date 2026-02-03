import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const targetHash = hash && hash.length > 1 ? hash : null
    if (targetHash) {
      const element = document.querySelector(targetHash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
