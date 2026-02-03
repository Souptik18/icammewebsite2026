import Layout from '../components/Layout'

const materialTopics = [
  'Steel and high temperature alloys',
  'Functionally Graded Materials and Smart Materials',
  'Advanced Structural Materials',
  'Composite/Intermetallics/polymer materials',
  'Bio-mimetic & Bio-inspired Materials',
  'Graphene and 2D Materials',
  'Non-Ferrous, Rare and Precious metals',
  'Micro/Nano/Pico materials',
  'Thin and Thick films coating materials',
  'Magnetic, Electronic and Optical Materials',
  'Solar cells',
  'Hydrometallurgy',
  'Powder Metallurgy',
  'Cement and mining',
  'Advances in Computational Materials Science',
  'Materials waste management',
  'Recycling of Materials',
]

const manufacturingTopics = [
  'Advanced Machining Processes',
  'High-speed/Hybrid/Hard Machining processes',
  'Ultra-Precision Machining',
  'Micro-machining',
  'Additive /rapid manufacturing',
  'Agile/ Lean/Intelligent Manufacturing',
  'Green and Sustainable Manufacturing Processes',
  'Web-based Manufacturing',
  'Image Processing in Manufacturing',
  'Automation in Manufacturing/Robotics',
  'Sensors and Condition monitoring',
  'IOT in Manufacturing',
  'AI/Machine Learning application in Manufacturing',
  'Surface Engineering',
  'CAE/CAD/CAM',
  'Flexible Manufacturing System',
  'MEMS Integration/Packaging',
  'Joining / Material Modification Technology',
  'Advanced forming/forging/casting manufacturing process',
  'Numerical Modelling and Simulation',
  'Reverse Engineering and Concurrent Engineering',
  'Logistics and Supply Chain Management',
  'Quality & Reliability Engineering',
  'Total Quality Management and Quality Engineering',
]

function Tracks() {
  return (
    <Layout headerVariant="inner">
      <section className="container page-section">
        <h3>
          <b>
            The conference invites original contributions in the fields of Mechanical Engineering. Papers are invited
            on the following topics (but not limited to) aligned with the conference theme:
          </b>
        </h3>
        <br />
        <div className="row">
          <div className="col-md-6">
            <h3>Material and metallurgy</h3>
            <ul>
              {materialTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Manufacturing and Industrial Engineering</h3>
            <ul>
              {manufacturingTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
        <br />
        <p style={{ fontSize: 20, color: 'black' }}>
          All submitted papers will be evaluated by the conference reviewer committee in terms of quality, originality
          of approach and relevance to the theme of the conference. All accepted and registered papers will be
          published in <strong>SCOPUS</strong> Indexed Conference Proceedings.
        </p>
      </section>
    </Layout>
  )
}

export default Tracks
