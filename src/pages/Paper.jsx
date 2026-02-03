import Layout from '../components/Layout'

function Paper() {
  return (
    <Layout headerVariant="inner" pageClassName="paper-page">
      <section className="paper-hero">
        <div className="paper-hero-content">
          <h1>Call for Paper</h1>
          <h2>ICAMME 2026</h2>
          <p className="paper-hero-date">10th–12th October</p>
          <p className="paper-hero-place">KIIT DU, Bhubaneswar</p>
        </div>
      </section>

      <section className="paper-intro">
        <div className="container">
          <h3>International Conference on Advanced Materials and Manufacturing Engineering</h3>
          <p className="paper-intro-strong">October 10–12, 2026</p>
          <p className="paper-intro-strong">KIIT DU, Bhubaneswar, India</p>
          <p>
            The Program Committee of ICAMME 2026 invites researchers, scientists, and engineers from across the globe
            to submit their original, unpublished research papers. Organized by the School of Mechanical Engineering,
            KIIT, in collaboration with IIT Bhubaneswar and Newcastle University, Singapore, this conference provides
            a premier venue for presenting the latest breakthroughs in materials science and intelligent
            manufacturing.
          </p>
        </div>
      </section>

      <section className="paper-section paper-tracks">
        <div className="container">
          <h2 className="paper-title">Conference Tracks</h2>
          <p className="paper-lead">
            We welcome submissions in the following four thematic tracks:
          </p>
          <div className="paper-track">
            <h3>Track 1: Advanced Material Science &amp; Characterization</h3>
            <ul>
              <li><strong>Specialized Materials:</strong> Shape Memory Alloys, Super Alloys, Bio-materials, and Meta-materials.</li>
              <li><strong>Nanotechnology:</strong> Nano-materials, Functionalized Materials, and Intermetallics.</li>
              <li><strong>Analysis:</strong> Material Characterization, Metallography, and Non-destructive Examination (NDE).</li>
              <li><strong>Behavior:</strong> High strain rate deformation and Material Testing.</li>
            </ul>
          </div>
          <div className="paper-track">
            <h3>Track 2: Advanced Manufacturing &amp; Sustainable Engineering</h3>
            <ul>
              <li><strong>Green Processes:</strong> Sustainable Materials, Green Manufacturing, and Recycling/Remanufacturing.</li>
              <li><strong>Precision Engineering:</strong> Advanced Machining, Laser-based Manufacturing, and High-energy Beam Processing.</li>
              <li><strong>Traditional Re-imagined:</strong> Advanced Metal Forming, Bending, and Casting techniques.</li>
              <li><strong>Sustainability:</strong> Environmental aspects of traditional materials and Design for Disassembly.</li>
            </ul>
          </div>
          <div className="paper-track">
            <h3>Track 3: Industrial Robotics &amp; Automated Manufacturing</h3>
            <ul>
              <li><strong>Robotics:</strong> Industrial Robotics, Cobots (Human-Robot Interaction), and Autonomous Mobile Systems.</li>
              <li><strong>Automation:</strong> PLC, SCADA, Embedded Control, and Automated 3D Printing (Additive Manufacturing).</li>
              <li><strong>Systems:</strong> Robotic Welding, Assembly, and Intelligent Inspection Systems.</li>
            </ul>
          </div>
          <div className="paper-track">
            <h3>Track 4: Smart Systems, Digital Twins &amp; Industry 5.0</h3>
            <ul>
              <li><strong>Digital Intelligence:</strong> AI &amp; Machine Learning for Automation, Digital Twins, and Virtual Manufacturing.</li>
              <li><strong>Connectivity:</strong> Industrial IoT (IIoT), Cloud/Edge Computing, and Cybersecurity in manufacturing.</li>
              <li><strong>Strategy:</strong> Quality 4.0, Predictive Maintenance, Industry 5.0 Technologies and Human-Centered Systems.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="paper-section paper-publication">
        <div className="container">
          <h2 className="paper-title">Publication &amp; Indexing</h2>
          <ul>
            <li>
              All submitted papers will undergo a rigorous peer-review process by international experts.
            </li>
            <li>
              Proceedings: Accepted and presented papers will be published in Scopus-indexed conference proceedings.
            </li>
            <li>
              Excellence: High-quality papers may be recommended for extended publication in special issues of reputed
              SCI/Scopus-indexed journals.
            </li>
          </ul>
        </div>
      </section>

      <section className="paper-section paper-dates">
        <div className="container">
          <h2 className="paper-title paper-title-light">Important Date</h2>
          <div className="paper-table">
            <table>
              <thead>
                <tr>
                  <th>Milestone</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full Paper Submission Opens</td>
                  <td>Feb 15, 2026</td>
                </tr>
                <tr>
                  <td>Submission Deadline</td>
                  <td>May 30, 2026</td>
                </tr>
                <tr>
                  <td>Notification of Acceptance</td>
                  <td>Jul 15, 2026</td>
                </tr>
                <tr>
                  <td>Camera Ready Paper Due</td>
                  <td>Aug 10, 2026</td>
                </tr>
                <tr>
                  <td>Early Bird Registration Ends</td>
                  <td>Aug 30, 2026</td>
                </tr>
                <tr>
                  <td>Conference Dates</td>
                  <td>October 10–12, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="paper-section paper-submit">
        <div className="container">
          <h2 className="paper-title">Submit Full Length Paper</h2>
          <p>
            Prospective authors from India and abroad are invited to submit manuscripts reporting original, unpublished
            research and recent developments in topics related to the conference. Authors are requested to submit full-length
            papers online using the link below:
          </p>
          <a href="#" className="paper-submit-btn">
            Submit Paper
          </a>
        </div>
      </section>

      <section className="paper-section paper-guidelines">
        <div className="container">
          <h2 className="paper-title">Formatting &amp; Submission Guidelines</h2>
          <p className="paper-guidelines-intro">
            To ensure a smooth peer-review process, all submissions must strictly adhere to the following formatting
            requirements:
          </p>
          <ul className="paper-guidelines-list">
            <li><strong>File Format:</strong> Papers must be submitted in PDF format only.</li>
            <li>
              <strong>Template:</strong> Submissions must include the Title, Abstract, Author Affiliation (including email
              address), and Keywords as per the official template.
              <div className="paper-template-wrap">
                <a href="#" className="paper-template-btn">Download Template</a>
              </div>
            </li>
            <li><strong>Headers &amp; Footers:</strong> The paper should not contain page numbers or any special headers/footers.</li>
            <li>
              <strong>Originality:</strong> Manuscripts must report original, unpublished research and should not be under
              consideration for publication elsewhere.
            </li>
          </ul>
        </div>
      </section>

      <section className="paper-section paper-categories">
        <div className="container">
          <h2 className="paper-title">Paper Categories &amp; Length</h2>
          <ul>
            <li>
              <strong>Regular Papers:</strong> Should present novel perspectives and comprehensive research within the
              conference scope.
            </li>
            <li>
              <strong>Short Papers (Work-in-Progress):</strong> An opportunity to present preliminary or interim results.
            </li>
            <li>
              <strong>Maximum Length:</strong> The total paper length should not exceed 6 pages.
            </li>
            <li>
              <strong>Literature Reviews/Survey Papers:</strong> These will only be considered if they present a new
              perspective or clearly benefit the field. Papers must go beyond a simple review and define the field in a
              new way or highlight exciting new technologies.
            </li>
          </ul>
        </div>
      </section>

      <section className="paper-section paper-ethics">
        <div className="container">
          <h2 className="paper-title">Policy on Plagiarism &amp; Ethics</h2>
          <ul>
            <li>
              <strong>Similarity Test:</strong> All submitted papers will be subjected to a similarity check using
              Turnitin Software.
            </li>
            <li>
              <strong>Acceptance Criteria:</strong> Only papers achieving a minimal similarity index will proceed to
              formal review. Papers deemed unacceptable will be rejected or withdrawn without a formal review.
            </li>
            <li>
              <strong>Author Responsibility:</strong> As per the copyright transfer agreement, authors are deemed
              individually or collectively responsible for the content of the manuscript published by them.
            </li>
            <li>
              <strong>Refrain from Plagiarism:</strong> Authors are requested to kindly refrain from plagiarism in any
              form. Manuscripts found to be plagiarized during any stage of review or publication will be rejected.
            </li>
          </ul>
        </div>
      </section>

      <section className="paper-section paper-reminders">
        <div className="container">
          <h2 className="paper-title">Important Reminders</h2>
          <ul>
            <li>Ensure all author details are accurate at the time of submission.</li>
            <li>
              Papers failing to follow the 6-page limit or the official template may be returned for correction before
              review.
            </li>
            <li>
              All accepted and presented papers will be submitted for publication in Scopus-indexed proceedings.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Paper
