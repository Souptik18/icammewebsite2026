import Layout from '../components/Layout'

function Mission() {
  return (
    <Layout headerVariant="inner">
      <section className="container page-section">
        <div className="row align-items-start">
          <div className="col-md-4">
            <img className="img-fluid" src="/assets/img/about/about.png" alt="About ICAMME" />
          </div>
          <div className="col-md-8">
            <h3>
              <strong>About ICAMME 2019</strong>
            </h3>
            <p>
              The <strong>International Conference on Advances in Materials and Manufacturing Engineering</strong>{' '}
              (<strong>ICAMME</strong> - <strong>2019</strong>) aims to provide an ideal platform and bring together the
              researchers, scientists, engineers, industrial experts, scholars and students share and widen their
              knowledge on theoretical, numerical and experimental developments in the field of manufacturing,
              production engineering, machine design, fluid/thermal engineering, and materials. This conference offers
              excellent opportunities for the participants to have a direct exchange of ideas and experiences, to mine
              potential research problems, to forge research relations alongside finding partners for future
              collaborations. The conference has invited eminent speakers from industry and academia for delivering
              keynote-lectures and plenary-talks. Given the gamut of engineering challenges pertaining to mechanical
              engineering and materials that the modern society is currently faced with, a holistic effort involving
              and transcending various disciplines of mechanical engineering is essential. Therefore, the{' '}
              <strong>ICAMME</strong> - <strong>2019</strong> aims at emphasizing the need of the channelization of
              research efforts from various streams of mechanical engineering for bringing technological advancements
              addressing and providing solutions to key engineering issues.
            </p>
            <p>
              The conference program includes plenary talks and keynote lectures from eminent speakers from industry
              and academia alongside paper presentations in parallel sessions. Papers are invited on the following
              topics to be addressed (but not limited to) in accordance with the theme of the conference:
            </p>
            <ol>
              <li>Topic: Smart and Advanced Materials</li>
              <li>Topic: Advanced Manufacturing</li>
              <li>Topic: Design and Industrial Engineering</li>
              <li>Topic: Robotics and Automation</li>
            </ol>
            <p>
              All submitted papers will be evaluated by the conference reviewer committee in terms of quality,
              originality of approach and relevance to the theme of the conference. The paper should be an original
              contribution, not published/accepted/under consideration or presented anywhere else earlier.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Mission
