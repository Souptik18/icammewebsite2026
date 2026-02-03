import Layout from '../components/Layout'

function NotFound() {
  return (
    <Layout headerVariant="inner">
      <section className="container page-section">
        <h2>Page not found</h2>
        <p>The requested page is not available.</p>
      </section>
    </Layout>
  )
}

export default NotFound
