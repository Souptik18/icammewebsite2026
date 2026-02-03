import { useEffect, useState } from 'react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <i className="lni-chevron-up" />
    </button>
  )
}

export default BackToTop
