import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

const TOUR_SLIDES = [
  '/assets/img/tour/khandagiri.jpg',
  '/assets/img/tour/chilika.jpg',
  '/assets/img/tour/puri.jpg',
  '/assets/img/tour/nandan-kanan.jpg',
]

function SocialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TOUR_SLIDES.length)
    }, 6000)
    return () => clearInterval(intervalId)
  }, [])

  const prevSlide = () => setActiveIndex((current) => (current - 1 + TOUR_SLIDES.length) % TOUR_SLIDES.length)
  const nextSlide = () => setActiveIndex((current) => (current + 1) % TOUR_SLIDES.length)

  return (
    <div className="carousel slide">
      <ol className="carousel-indicators">
        {TOUR_SLIDES.map((_, index) => (
          <li
            key={`tour-indicator-${index}`}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {TOUR_SLIDES.map((src, index) => (
          <div key={src} className={`carousel-item${index === activeIndex ? ' active' : ''}`}>
            <img src={src} style={{ width: '100%' }} alt="Tour" />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" onClick={prevSlide} aria-label="Previous">
        <span className="carousel-control" aria-hidden="true">
          <i className="lni-chevron-left" />
        </span>
      </button>
      <button className="carousel-control-next" type="button" onClick={nextSlide} aria-label="Next">
        <span className="carousel-control" aria-hidden="true">
          <i className="lni-chevron-right" />
        </span>
      </button>
    </div>
  )
}

function Social() {
  return (
    <Layout headerVariant="inner">
      <section className="container page-section">
        <SocialCarousel />
        <br />
        <br />
        <h2>
          <u>Bhubaneshwar &quot;Temple City of India&quot;</u>
        </h2>
        <p>
          With the Architectural legacy of the Kalinga dynasty Bhubaneswar boasts with the hundreds of temples
          Lingraj, Mukteswar, RajaRani, Rameshwar, Vital etc. Dating from 6-13th century AD. Apart from remarkably
          sculptured temples, the Jain caves of Khandagiri and Udhaygiri, Nandankanan Zoological park, the Peace Pagoda
          &quot;Dhauli&quot; on the bank of the river Gaya attracts visitor from all over the world. Besides, Puri, Konark along
          with capital city of Bhubaneswar form the three vertices of Golden triangle of Orrisa tourism circuit.
        </p>
      </section>
    </Layout>
  )
}

export default Social
