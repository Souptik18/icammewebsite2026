import Layout from '../components/Layout'

function About() {
  return (
    <Layout headerVariant="inner" pageClassName="about-page">
      <section className="about-hero">
        <div className="about-hero-title">
          <span>About</span>
          <strong>ICAMME 2026</strong>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="about-section-title">Vision &amp; Mission</h2>
          <div className="about-columns">
            <h3>Vision</h3>
            <p>
              To emerge as a premier global platform that catalyzes the transformation of traditional engineering
              through the convergence of Advanced Materials and Intelligent Manufacturing. ICAMME 2026 envisions a
              future where sustainable material innovation and autonomous systems drive the global transition toward
              Industry 5.0.
            </p>
            <h3>Mission</h3>
            <ul>
              <li><strong>Knowledge Exchange:</strong> To facilitate high-level discourse between researchers, industry leaders, and academicians on the latest breakthroughs in material science and manufacturing processes.</li>
              <li><strong>Interdisciplinary Collaboration:</strong> To bridge the gap between fundamental research and real-world industrial applications by fostering partnerships across international borders.</li>
              <li><strong>Excellence in Research:</strong> To provide a rigorous peer-review environment that recognizes and publishes high-impact research in Scopus-indexed proceedings.</li>
              <li><strong>Sustainability &amp; Innovation:</strong> To promote eco-friendly manufacturing, green robotics, and the development of next-generation materials that address global environmental challenges.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="about-section-title">About KIIT Deemed to be University</h2>
          <p>
            KIIT (Kalinga Institute of Industrial Technology) is a world-class institution located in Bhubaneswar, India.
            Known for its academic excellence and social commitment, KIIT has consistently been ranked among the top
            universities globally by the Times Higher Education (THE) and QS World University Rankings.
          </p>
          <h3 className="about-subtitle">The School of Mechanical Engineering (SME)</h3>
          <p>
            The School of Mechanical Engineering (SME) at KIIT is a hub of innovation, research, and technical education.
            The School offers a vibrant academic environment with a focus on emerging technologies and industry-ready skill sets.
          </p>
          <ul>
            <li><strong>World-Class Infrastructure:</strong> The School is equipped with state-of-the-art laboratories including Advanced Manufacturing Lab, Robotics and Automation Cell, Composite Lab, and Thermal Engineering Research Center.</li>
            <li><strong>Research Excellence:</strong> With a strong research capability in areas like Nano-materials, Smart Materials, and Industry 4.0, the School facilitates cutting-edge research in fields such as manufacturing, materials, and automation.</li>
            <li><strong>Industry Integration:</strong> SME maintains strong ties with global industries, ensuring that research outcomes are aligned with current market needs and technological shifts.</li>
          </ul>
        </div>
      </section>

      <section className="about-collaborators">
        <div className="container">
          <h2>Our Collaborators</h2>
          <h3>Strategic Partnerships for Global Innovation</h3>
          <p>
            ICAMME 2026 is proud to be organized in partnership with prestigious national and international
            institutions, bringing together a wealth of expertise in materials science, electrical engineering, and
            sustainable technology.
          </p>

          <h4>IIT Bhubaneswar (Indian Institute of Technology Bhubaneswar)</h4>
          <p>
            As an &quot;Institute of National Importance,&quot; IIT Bhubaneswar is at the forefront of engineering education
            and research in India. Their involvement brings specialized expertise in high-end metallurgical engineering,
            advanced computational modeling, and precision manufacturing. This synergy between KIIT and IIT Bhubaneswar
            ensures a rigorous academic foundation and a strong regional connection for the conference.
          </p>

          <h4>Newcastle University in Singapore (NUiS), Singapore</h4>
          <p>
            The conference is co-hosted by the School of Electrical and Electronic Engineering, Newcastle University in
            Singapore (NUiS).
          </p>
          <p>
            As a branch of the world-renowned Newcastle University, UK, NUiS offers a wide range of undergraduate and
            postgraduate programs with a strong emphasis on engineering, computing, and sustainability. Established to
            provide high-quality education and research in Southeast Asia, NUiS is recognized for its collaborative
            efforts with industries and academic institutions to address both regional and global challenges. The campus
            is a vibrant hub for innovation, particularly in areas such as:
          </p>
          <ul>
            <li>Advanced Engineering &amp; Smart Cities</li>
            <li>Renewable Energy Systems</li>
            <li>Sustainable Manufacturing Solutions</li>
          </ul>
          <p>
            This collaboration aligns with Singapore&apos;s goals of being a global hub for research and development,
            providing ICAMME 2026 delegates with a unique international perspective on the future of technology.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default About

