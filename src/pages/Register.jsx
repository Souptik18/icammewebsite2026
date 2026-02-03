import Layout from '../components/Layout'

function Register() {
  return (
    <Layout headerVariant="inner">
      <section className="container page-section">
        <h1 className="text-center">
          <b>Registration Details</b>
        </h1>
        <div className="table-responsive mt-4">
          <table className="table styled-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Before Early Bird Registration Ends</th>
                <th>After Early Bird Registration Ends</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>National delegates (Industry, R&amp;D)</td>
                <td>Rs 9000</td>
                <td>Rs 10000</td>
              </tr>
              <tr>
                <td>National delegates (Academia, UG/PG &amp; research scholars)</td>
                <td>Rs 7500</td>
                <td>Rs 8000</td>
              </tr>
              <tr>
                <td>International delegates (Industry, R&amp;D, Academia, students)</td>
                <td>$ 150/-</td>
                <td>$ 200/-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <h4 style={{ color: 'darkgoldenrod' }}>
            Payment of the registration fee should be made through an online transfer. The bank details are as
            follows:
          </h4>
          <div className="registration-bank-details">
            <h4>Account name: ICAMME 2019</h4>
            <h4>IFSC Code: 0003951</h4>
            <h4>Account no: 50100252167080</h4>
            <h4>Swift Code: HDFCINBBCAL</h4>
          </div>
        </div>

        <h2 className="text-center" style={{ color: 'blue' }}>
          Note - Registration ends on 15 October 2026
        </h2>

        <div className="text-center mt-5">
          <p className="download-title">TO DOWNLOAD THE REGISTRATION FORM CLICK HERE.</p>
          <a href="#" className="download-button" download>
            Download
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Register

