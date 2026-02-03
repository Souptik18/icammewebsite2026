import Layout from '../components/Layout'

function Venue() {
  return (
    <Layout headerVariant="inner">
      <section className="container page-section">
        <div className="map-responsive mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7481.334969178705!2d85.81311201010449!3d20.355350875969584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091813dab8d5%3A0xa033051ccddbbcbc!2sKalinga+Institute+of+Industrial+Technology!5e0!3m2!1sen!2sin!4v1534916749100"
            title="KIIT Location"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="venue-info mb-4">
          <h3>Venue</h3>
          <p>School of Mechanical Engineering, Campus-08, KIIT Deemed to be University, Patia, Bhubaneswar</p>
          <h3>Nearest railway station</h3>
          <p>
            Bhubaneswar railway station: 12.5 km from Bhubaneswar railway station. From station, available bus no: 306,
            207, 225; Destination: KIIT Campus
          </p>
          <h3>Nearest Airport</h3>
          <p>
            <a href="https://en.wikipedia.org/wiki/Biju_Patnaik_International_Airport" target="_blank" rel="noreferrer">
              Biju Patnaik International Airport
            </a>{' '}
            : 12.9 km from Bhubaneswar Airport.
          </p>
          <p>
            Available bus no: 801-&gt;225; Destination: Master Canteen (by bus no. 801) then KIIT Campus (by bus no.
            225).
          </p>
          <p>
            Bus no. 405-&gt;225; Destination: Master Canteen (by bus no. 405) then KIIT Campus (by bus no. 225).
          </p>
          <p>
            <b>Note:</b> Auto Rickshaw and app based Cabs are also available from Airport and Railway Stations.
          </p>
        </div>

        <div className="venue-kiit">
          <h3>Know More About KIIT</h3>
          <a href="http://kiit.ac.in/campuslife/" target="_blank" rel="noreferrer">
            <img className="img-fluid" src="/assets/img/KIIT.jpg" alt="KIIT Campus" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Venue
