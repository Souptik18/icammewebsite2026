import Layout from '../components/Layout'

const stallPackages = [
  { scheme: 'A', size: '10 X 10', price: '100', total: '10,000' },
  { scheme: 'B', size: '10 X 20', price: '100', total: '20,000' },
  { scheme: 'C', size: '10 X 30', price: '80', total: '24,000' },
  { scheme: 'D', size: '20 X 20', price: '80', total: '32,000' },
  { scheme: 'E', size: '20 X 30', price: '70', total: '42,000' },
]

function Sponsorship() {
  return (
    <Layout headerVariant="inner">
      <section className="container page-section">
        <h1 style={{ color: 'black' }}>SPONSORSHIP PROPOSAL</h1>
        <br />
        <b style={{ color: 'black' }}>
          International Conference on Advances in Material and Manufacturing Engineering (ICAMME - 2026)
        </b>
        <p>
          ICAMME 2026 is a three days event hosted by Department of Mechanical Engineering, KIIT University
          Bhubaneshwar, Orissa. The event will include oral presentations of research papers grouped into parallel
          tracks. Keynote talks from experts and panel discussions are also included in the program schedule of the
          conference.
        </p>
        <p>
          ICAMME 2026 is likely to be attended by Scientists and Academicians, Engineers, Industry representatives and
          Students from all over the globe.
        </p>
        <p>
          We invite you to team with us in promotion of scientific and engineering research by sponsoring the
          conference. Various opportunities for association are available as per sponsorship details given below.
        </p>

        <div className="row mt-4">
          <div className="col-md-8">
            <h4 style={{ color: 'black' }}>PLATINUM SPONSORSHIP - 2,50,000 INR</h4>
            <h4 style={{ color: 'black' }}>GOLDEN SPONSORSHIP - 1,50,000 INR</h4>
            <h4 style={{ color: 'black' }}>SILVER SPONSORSHIP - 1,00,000 INR</h4>
            <h4 style={{ color: 'black' }}>BRONZE SPONSORSHIP - 50,000 INR</h4>
          </div>
        </div>

        <br />
        <b>Stall package</b>
        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Scheme</th>
                <th>Booth size (sq. ft)</th>
                <th>Price (INR/sq. ft)</th>
                <th>Total cost (INR)</th>
              </tr>
            </thead>
            <tbody>
              {stallPackages.map((pkg) => (
                <tr key={pkg.scheme}>
                  <td>{pkg.scheme}</td>
                  <td>{pkg.size}</td>
                  <td>{pkg.price}</td>
                  <td>{pkg.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <br />
        <h3>For more details download the brochure</h3>
        <a href="#" target="_blank" rel="noreferrer">
          <button type="button" className="btn btn-common">
            BROCHURE
          </button>
        </a>

        <br />
        <br />
        <p style={{ color: 'black' }}>
          <b>For further details Contact:</b>
          <br />
          Organizing Secretary (ICAMME - 2026)
          <br />
          Department of Mechanical Engineering
          <br />
          Kalinga Institute of Industrial Technology
          <br />
          Campus - 8
          <br />
          KIIT University, Orissa.
          <br />
          Dr. Ramanuj Kumar (7205077750), Dr. Rishitosh Ranjan (9090040315)
          <br />
          Email: icamme.sme@kiit.ac.in
        </p>
      </section>
    </Layout>
  )
}

export default Sponsorship


