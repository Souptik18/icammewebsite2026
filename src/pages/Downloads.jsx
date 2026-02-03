import Layout from '../components/Layout'

const downloadItems = [
  { label: 'BROCHURE', description: 'TO DOWNLOAD THE BROCHURE CLICK HERE :' },
  { label: 'SPONSORSHIP', description: 'TO DOWNLOAD THE SPONSORSHIP FORM CLICK HERE :' },
  { label: 'REGISTRATION', description: 'TO DOWNLOAD THE REGISTRATION FORM CLICK HERE :' },
]

function Downloads() {
  return (
    <Layout headerVariant="inner">
      <section className="container page-section">
        <div className="table-responsive">
          <table className="table table-bordered downloads-table">
            <tbody>
              {downloadItems.map((item) => (
                <tr key={item.label}>
                  <td>
                    <h3>{item.description}</h3>
                  </td>
                  <td>
                    <a href="#" target="_blank" rel="noreferrer">
                      <button type="button" className="btn btn-common">
                        {item.label}
                      </button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          For Further Information you can contact:
          <br />
          Dr. Ramanuj Kumar (7205077750)
          <br />
          Dr. Amlana Panda (9776204660)
          <br />
          Dr. Rishitosh Ranjan (9090040315)
        </p>
      </section>
    </Layout>
  )
}

export default Downloads
