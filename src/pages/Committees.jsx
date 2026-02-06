import Layout from '../components/Layout'
import chiefPatronImage from '../assets/img1.jpg'

const SECTION_TITLE_STYLE = { color: '#0f2f6d', textDecoration: 'none', textAlign: 'center' }

const committeeSections = [
  {
    title: 'Patron',
    items: [
      { name: 'Shri Ashok Kumar Parija', role: 'Chancellor, KIIT' },
      { name: 'Prof. (Dr.) Saranjit Singh', role: 'Vice-Chancellor, KIIT' },
    ],
  },
  {
    title: 'Co-Patron',
    items: [
      { name: 'Prof. (Dr.) Jnyana Ranjan Mohanty', role: 'Registrar, KIIT' },
    ],
  },
  {
    title: 'Chairman',
    items: [
      { name: 'Dr. B. Surekha', role: 'Dean, SME, KIIT' },
    ],
  },
  {
    title: 'Conference Chair',
    items: [
      {
        name: 'Prof. Arun Kumar Pradhan',
        role: 'Head of the School, School of Mechanical Sciences, IIT Bhubaneswar',
      },
      { name: 'Prof. V. Pandu Ranga', role: 'Professor, SMS, IIT Bhubaneswar' },
      { name: 'Prof. (Dr.) Ashok Kumar Sahoo', role: 'Director, R&D (Technology), KIIT' },
      { name: 'Prof. (Dr.) Bharat Chandra Routara', role: 'Senior Professor, SME, KIIT' },
      { name: 'Prof. (Dr.) Purna Chandra Mishra', role: 'Dean (Research), SME, KIIT' },
      { name: 'Dr Kheng Lim Goh', role: 'Reader and Associate Professor, MDME, NUiS' },
    ],
  },
  {
    title: 'Co-Chair',
    items: [
      { name: 'Dr. Nitin Sharma', role: 'Associate Professor, SME, KIIT' },
      { name: 'Dr. Gaurav Bartarya', role: 'Associate Professor, SMS, IIT Bhubaneswar' },
      { name: 'Dr. Jun Jie Chong', role: 'Assistant Professor, MDME, NUiS' },
    ],
  },
  {
    title: 'Organizing Secretary',
    items: [
      { name: 'Dr. P. Chandrasekhar', role: 'Associate Professor, SME, KIIT' },
      { name: 'Dr. Rishitosh Ranjan', role: 'Assistant Professor, SME, KIIT' },
      { name: 'Dr. Suvradip Mullick', role: 'Associate Professor, SMS, IIT Bhubaneswar' },
      { name: 'Dr. Zi Jie Choong', role: 'Assistant Professor, MDME, NUiS' },
    ],
  },
  {
    title: 'Conveners',
    items: [
      { name: 'Dr. Ramanuj Kumar', role: 'Associate Professor, SME, KIIT' },
      { name: 'Dr. Amlana Panda', role: 'Associate Professor, SME, KIIT' },
      { name: 'Dr. Chetan', role: 'Associate Professor, SMS, IIT Bhubaneswar' },
      { name: 'Dr. Xinwei Li', role: 'Assistant Professor, MDME, NUiS' },
    ],
  },
  {
    title: 'Editorial Board',
    items: [
      {
        name: 'Dr. Kheng Lim Goh',
        role: 'Mechanical Design and Manufacturing Engineering, Newcastle University in Singapore (NUiS), Singapore',
        link: 'https://www.ncl.ac.uk/singapore/staff/profile/kheng-limgoh.html',
      },
      {
        name: 'Dr. Jun Jie Chong',
        role: 'Mechanical Design and Manufacturing Engineering, Newcastle University in Singapore (NUiS), Singapore',
        link: 'https://www.ncl.ac.uk/singapore/staff/profile/junjiechong.html',
      },
      {
        name: 'Prof. M. M. Mahapatra',
        role: 'School of Mechanical Sciences, IIT Bhubaneswar',
        link: 'https://old.iitbbs.ac.in/profile.php/MMMahapatra',
      },
      {
        name: 'Prof. V. Pandu Ranga',
        role: 'School of Mechanical Sciences, IIT Bhubaneswar',
        link: 'https://www.iitbbs.ac.in/index.php/pandu/',
      },
      {
        name: 'Dr. Sudesna Roy',
        role: 'School of Mechanical Engineering, KIIT Deemed to be University, Bhubaneswar',
        link: 'https://faculty.kiit.ac.in/sudesna-roy/',
      },
      {
        name: 'Dr. Ramanuj Kumar',
        role: 'School of Mechanical Engineering, KIIT Deemed to be University, Bhubaneswar',
        link: 'https://mechanical.kiit.ac.in/profiles/ramanuj-kumar/',
      },
    ],
  },
  {
    title: 'International Advisory Board',
    items: [
      { name: 'Prof. (Dr.) Jun Jie Chong', role: 'Newcastle University Singapore' },
      { name: 'Prof. (Dr.) Velaphi Msomi', role: 'University of South Africa, Johannesburg' },
      { name: 'Prof. (Dr.) Anurag Sharma', role: 'Newcastle University in Singapore' },
      { name: 'Prof. (Dr.) Leijun Li', role: 'University of Alberta, Canada' },
      { name: 'Prof. (Dr.) Prof. J. Paulo Davim', role: 'University of Averio, Portugal' },
      { name: 'Prof. (Dr.) Munish Kumar Gupta', role: 'Opole University of Technology, Opole, Poland' },
      { name: 'Prof. (Dr.) J. N. Reddy', role: 'University of Taxas, USA' },
      { name: 'Prof. (Dr.) Michael S. Packianather', role: 'Carddiff University, UK' },
      { name: 'Prof. (Dr.) Ramazan Hakki Namlu', role: 'Atilim University, Turkey' },
      { name: 'Prof. (Dr.) Mohammad Rafighi', role: 'Baskent University' },
      { name: 'Prof. (Dr.) Mustafa Ozdemir', role: 'Yozgat Bozok University, Turkey' },
    ],
  },
  {
    title: 'National Advisory Board',
    items: [
      { name: 'Prof. (Dr.) D. K. Pratihar', role: 'IIT Kharagpur' },
      { name: 'Prof. (Dr.) M. M. Mahapatra', role: 'IIT, Bhubaneswar' },
      { name: 'Prof. (Dr.) V. Pandu Ranga', role: 'IIT Bhubaneswar' },
      { name: 'Prof. (Dr.) K. K. Singh', role: 'IIT (ISM), Dhanbad' },
      { name: 'Prof. (Dr.) B. Doloi', role: 'Jadavpur University, Kolkatta' },
      { name: 'Prof. (Dr.) Prasant Sahoo', role: 'Jadavpur University, Kolkatta' },
      { name: 'Prof. (Dr.) S. S. Mohapatra', role: 'NIT, Rourkela' },
      { name: 'Prof. (Dr.) Ashok Kumar Sahoo', role: 'KIIT Bhubaneswar' },
      { name: 'Prof. (Dr.) Bharat Chandra Routara', role: 'KIIT Bhubaneswar' },
      { name: 'Prof. (Dr.) Purna Chandra Mishra', role: 'KIIT Bhubaneswar' },
      { name: 'Prof. (Dr.) Ashish Kumar Srivastava', role: 'MIT Muzaffarpur, Bihar' },
      { name: 'Prof. (Dr.) T V K Gupta', role: 'NIT Nagpur' },
      { name: 'Dr. Aditya Kumar Lohar', role: 'Senior Scientist, CSIR Durgapur' },
      { name: 'Prof. (Dr.) Ravi Kumar Mandava', role: 'IIITDM Kurnool' },
      { name: 'Prof. (Dr.) Sudhansu Ranjan Das', role: 'VSSUT, Burla' },
      { name: 'Prof. (Dr.) Chinige Sampath Kumar', role: 'NIT Warangal' },
      { name: 'Prof. (Dr.) Tanmay Mohanty', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Prof. (Dr.) Sushanta Tripathy', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Prof. (Dr.) Rojalin Sahu', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Prof. (Dr.) Suchismita Satapathy', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Isham Panigrahi', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Sudesna Roy', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Diptikanta Das', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. P. Chandrasekhar', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Shanta Chakrabarty', role: 'SME, KIIT Bhubaneswa' },
      { name: 'Dr. Sambit Kumar Mahapatra', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Anish Pandey', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Sanjib Jaipuria', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Bijay Bijeta Nayak', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Deepak Singhal', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Rasmi Ranjan Behera', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Rahul', role: 'SME, KIIT Bhubaneswar' },
      { name: 'Dr. Deepanjali Mishra', role: 'SME, KIIT Bhubaneswar' },
    ],
  },
]

function CommitteeSection({ title, items }) {
  return (
    <div className="committee-card committee-section-card mb-4">
      <h2 style={SECTION_TITLE_STYLE}>{title}</h2>
      <ul className="committee-list">
        {items.map((item) => (
          <li key={`${item.name}-${item.role}`}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer">
                <strong>{item.name}</strong>
              </a>
            ) : (
              <strong>{item.name}</strong>
            )}
            {item.role ? <span> — {item.role}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Committees() {
  return (
    <Layout headerVariant="inner" pageClassName="committee-page">
      <section className="container page-section">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-7">
            <div className="committee-card text-center">
              <h2 style={SECTION_TITLE_STYLE}>Chief Patron</h2>
                <img className="img-fluid mb-3" src={chiefPatronImage} alt="Chief Patron" />
              <h3>Prof. (Dr.) Achyuta Samanta</h3>
              <h5>Founder, KIIT and KISS</h5>
              <p>Bhubaneswar</p>
            </div>
          </div>
        </div>

        {committeeSections.map((section) => (
          <CommitteeSection key={section.title} title={section.title} items={section.items} />
        ))}
      </section>
    </Layout>
  )
}

export default Committees
