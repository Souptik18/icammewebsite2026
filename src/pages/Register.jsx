import Layout from "../components/Layout";

function Register() {
  return (
    <Layout headerVariant="inner" pageClassName="register-page">
      <section className="container page-section">
        <h2 className="register-title">Registration Details</h2>

        <div className="register-table">
          <table>
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
                <td>
                  National delegates (Academia, UG/PG &amp; research scholars)
                </td>
                <td>Rs 7500</td>
                <td>Rs 8000</td>
              </tr>
              <tr>
                <td>
                  International delegates (Industry, R&amp;D, Academia,
                  students)
                </td>
                <td>$ 150/-</td>
                <td>$ 200/-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="register-payment-lead">
          Payment of the registration fee should be made through an online
          transfer. The bank details are as follows:
        </p>

        <div className="register-bank">
          <p>
            <strong>Account name:</strong> ICAMME 2026
          </p>
          <p>
            <strong>IFSC Code:</strong> 0003951
          </p>
          <p>
            <strong>Account no:</strong> 50100252167080
          </p>
          <p>
            <strong>Swift Code:</strong> HDFCINBBCAL
          </p>
        </div>

        <p className="register-note">
          Note - Registration ends on 15 October 2026
        </p>

        <div className="register-download">
          <p>TO DOWNLOAD THE REGISTRATION FORM CLICK HERE.</p>
          <a
            className="register-download-btn"
            href="/registration-form.pdf"
            download
          >
            Download
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default Register;
