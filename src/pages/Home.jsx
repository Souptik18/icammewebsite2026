import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import heroImage from "../assets/heropic.png";
import odishaTemplePuri from "../assets/download (1).webp";
import odishaTempleKonark from "../assets/download.webp";
import odishaTempleBhubaneswar from "../assets/width_800.webp";
import odishaKiit from "../assets/kiit_.webp";
import odishaKiss from "../assets/download (3).webp";
import odishaAchyutya from "../assets/download (2).webp";
import collabKiit from "../assets/kiitlogo.png";
import collabIit from "../assets/iitbbsruniversity.png";
import collabNewcastle from "../assets/newcastle.png";
import scopusLogo from "../assets/Scopus_logo.svg.png";

const SLIDES = [{ src: heroImage, alt: "ICAMME 2026 Hero" }];

const IMPORTANT_DATES = [
  { milestone: "Full Paper Submission Opens", date: "Feb 15, 2026" },
  { milestone: "Submission Deadline", date: "May 30, 2026" },
  { milestone: "Notification of Acceptance", date: "Jul 15, 2026" },
  { milestone: "Camera Ready Paper Due", date: "Aug 10, 2026" },
  { milestone: "Early Bird Registration Ends", date: "Aug 30, 2026" },
  { milestone: "Conference Dates", date: "October 10–12, 2026" },
];

const ODISHA_CARDS = [
  { title: "Jagannath Temple Puri", image: odishaTemplePuri },
  { title: "Sun Temple Konark", image: odishaTempleKonark },
  { title: "Lingaraj Temple Bhubaneswar", image: odishaTempleBhubaneswar },
  {
    title: "Kalinga Institute of Industrial Technology Deemed to be University",
    image: odishaKiit,
  },
  {
    title:
      "KISS - Kalinga Institute of Social Sciences a home for over 80000 underprivileged tribal students",
    image: odishaKiss,
  },
  { title: "Achutya Samanta Founder KIIT & KISS", image: odishaAchyutya },
];

function HomeCarousel() {
  return (
    <div id="main-slide" className="carousel slide">
      <div className="carousel-inner">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={`carousel-item${index === 0 ? " active" : ""}`}
          >
            <img className="d-block w-100" src={slide.src} alt={slide.alt} />
            {index === SLIDES.length - 1 ? (
              <div className="carousel-caption d-md-block hero-caption">
                <div className="hero-panel">
                  <h2>International Conference on Advanced</h2>
                  <h2>Materials and Manufacturing Engineering</h2>
                  <p>Kalinga Institute of Industrial Technology (KIIT)</p>
                  <p>Deemed to be University</p>
                  <p className="hero-date">10th–12th October, 2026</p>
                  <Link to="/paper" className="btn hero-cta">
                    Submit Paper
                  </Link>
                </div>
              </div>
            ) : (
              <div
                style={{ top: "20%" }}
                className="carousel-caption d-md-block"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <Layout
      headerVariant="home"
      headerContent={<HomeCarousel />}
      pageClassName="home-page"
    >
      <section className="collab-section home-section">
        <div className="container">
          <h2 className="collab-title">Collaborations</h2>
          <div className="collab-logos">
            <a href="https://kiit.ac.in/" target="_blank" rel="noreferrer">
              <img
                className="collab-logo collab-logo-kiit"
                src={collabKiit}
                alt="KIIT"
              />
            </a>
            <a href="http://www.iitbbs.ac.in/" target="_blank" rel="noreferrer">
              <img
                className="collab-logo collab-logo-iit"
                src={collabIit}
                alt="IIT Bhubaneswar"
              />
            </a>
            <a
              href="https://www.ncl.ac.uk/singapore/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="collab-logo collab-logo-newcastle"
                src={collabNewcastle}
                alt="Newcastle University Singapore"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="important-dates-section home-section">
        <div className="container">
          <h2 className="important-dates-title">Important Date</h2>
          <div className="important-dates-table">
            <table>
              <thead>
                <tr>
                  <th>Milestone</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {IMPORTANT_DATES.map((row) => (
                  <tr key={row.milestone}>
                    <td>{row.milestone}</td>
                    <td>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="publication-section home-section">
        <div className="container">
          <h2 className="publication-title">Publication & Indexing</h2>
          <div className="publication-content">
            <div className="publication-text">
              <p>
                All submitted papers will undergo a rigorous peer-review process
                by international experts.
              </p>
              <ul>
                <li>
                  Proceedings: Accepted and presented papers will be published
                  in Scopus-indexed conference proceedings.
                </li>
                <li>
                  Excellence: High-quality papers may be recommended for
                  extended publication in special issues of reputed
                  SCI/Scopus-indexed journals.
                </li>
              </ul>
            </div>
            <div className="publication-logo" aria-label="Scopus">
              <button
                type="button"
                className="modal-trigger"
                onClick={() =>
                  setLightboxImage({
                    title: "Scopus",
                    image: scopusLogo,
                  })
                }
                aria-label="Open Scopus logo"
              >
                <img src={scopusLogo} alt="Scopus" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="odisha-section home-section">
        <div className="container">
          <h2 className="odisha-title">Welcome to Odisha</h2>
          <p className="odisha-text">
            Welcome to Odisha, the vibrant soul of India, where ancient heritage
            meets modern innovation. We invite you to experience the
            architectural grandeur of our &#34;Golden Triangle&#34; and the
            legendary hospitality of the Temple City, Bhubaneswar. Beyond the
            technical sessions of ICAMME 2026, immerse yourself in a land of
            pristine beaches, sacred shrines, and a rich cultural legacy. We
            look forward to hosting you for an unforgettable journey of academic
            excellence and cultural discovery.
          </p>
          <div className="odisha-cards">
            {ODISHA_CARDS.map((card) => (
              <div className="odisha-card" key={card.title}>
                <button
                  type="button"
                  className="modal-trigger"
                  onClick={() => setLightboxImage(card)}
                  aria-label={`Open ${card.title} image`}
                >
                  <img src={card.image} alt={card.title} />
                </button>
                <div className="odisha-card-title">{card.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="visit-section home-section">
        <div className="container">
          <h2 className="visit-title">Why Visit During ICAMME 2026?</h2>
          <p className="visit-text">
            October offers pleasant weather in Odisha, making it the perfect
            time for sightseeing. Whether you are an architecture enthusiast, a
            history buff, or someone seeking spiritual peace, the proximity of
            these sites to the School of Mechanical Engineering, KIIT, ensures
            you can balance your academic pursuits with an unforgettable
            cultural journey.
          </p>
          <p className="visit-note">
            Travel Note: Bhubaneswar is well-connected by air and rail, serving
            as the primary gateway for international and domestic delegates
            looking to explore these historic landmarks.
          </p>
        </div>
      </section>

      <Modal
        open={Boolean(lightboxImage)}
        onClose={() => setLightboxImage(null)}
        title={lightboxImage?.title}
      >
        {lightboxImage && (
          <img
            className="modal-image"
            src={lightboxImage.image}
            alt={lightboxImage.title}
          />
        )}
      </Modal>
    </Layout>
  );
}

export default Home;
