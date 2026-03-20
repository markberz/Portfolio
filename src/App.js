import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [modalType, setModalType] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [allProjectsFadeOut, setAllProjectsFadeOut] = useState(false);
  // Add dark/light mode state and effects
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [darkMode]);

  // Certifications data
  // Each certificate has a title, organization, and image
  // You can add more certificates as needed
  // Images should be imported or require'd at the top
  // Example: const certImage = require('./path/to/certificate.png');
  // Ensure images are in the correct format (e.g., PNG, JPG)
  // Adjust paths based on your project structure
  // Example: const certs = [{ title: 'Certificate Title', org: 'Organization', img: require('./path/to/image.png') }];
  const certs = [
    { title: 'Data Analytics Essentials', org: 'Cisco', img: require('./Pictures/Data Analytics.png'), details: 'Issued by Cisco'},
    { title: 'Google IT Support', org: 'Google', img: require('./Pictures/IT Support Certificate-1.png'), details: 'Issued by Google. Credential ID: 65E3RMGLEAJL' },
    { title: 'Data Fundamentals Training Course', org: 'IBM Skills Build', img: require('./Pictures/Data Fundamentals.png'), details: 'Issued by IBM Skills Build ' },
    { title: 'Cisco Networking Academy: Introduction to Cybersecurity', org: 'DICT Region VIII', img: require('./Pictures/Cybersecurity.png'), details: 'Issued by DICT Region VIII.' },
  ];

  const techStack = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
    Backend: ['Rust', 'Python', 'Actix Web', 'Node.js'],
    Windows: ['Vb.net'],
    Embedded: ['C++', 'Arduino', 'ESP32', 'Wokwi', 'Proteus', 'Tinkercad', 'Fritzing'],
    CMS: ['Wix', 'Wordpress', 'Bubble'],
    Design: ['Figma', 'Canva'],
    Tools: ['VSCode', 'GitHub', 'Git', 'Arduino IDE', 'Vercel','Stack Overflow', 'Discord', 'Teams', 'ChatGPT']

  };

  // Projects data
  // Each project has a title, description, and link
  // You can add more projects as needed
  // Ensure links are valid and accessible
  // Example: const projects = [{ title: 'Project Title', desc: 'Project Description', link: 'https://example.com' }];
  // Adjust paths based on your project structure
  const projects = [
    { title: 'Senyas: Filipino Sign Language Translation for Two-Way Communication', desc: 'https://github.com/ctrl-bers/Senyas', link: 'https://github.com/ctrl-bers/Senyas' },
    { title: 'A Proposed Computerized Application Supply Inventory System for the School Supplies of Samar National School', desc: 'https://github.com/ctrl-bers/SupplyInventorySystem', link: 'https://github.com/ctrl-bers/SupplyInventorySystem' },
    { title: 'SPACE - Smart Personal AI for Calendar & Events!', desc: 'https://markberz.github.io/SPACE/', link: 'https://markberz.github.io/SPACE/' },
    {title: 'Capstone Assitant Powered By AI (CAP.AI)', desc: 'https://cap-ai-five.vercel.app/', link: 'https://cap-ai-five.vercel.app/'},
    { title: 'Github Profile Search', desc: 'https://ctrl-bers.github.io/GHProfileSearch/', link: 'https://ctrl-bers.github.io/GHProfileSearch/' },
    { title: 'Water Level Monitoring', desc: 'https://github.com/ctrl-bers/WaterLevelMonitoring', link: 'https://github.com/ctrl-bers/WaterLevelMonitoring' },
    { title: 'GarbDetect: Automated Wet and Dry Garbage Detection with IoT-Based User Notification', desc: 'https://github.com/ctrl-bers/Mircoprocessor26', link: 'https://github.com/ctrl-bers/Mircoprocessor26' },
    { title: 'GSM- Based Prepaid Electricity Meter with Theft Detection using Arduino ATMEGA', desc: 'https://github.com/ctrl-bers/CpEElec2', link: 'https://github.com/ctrl-bers/CpEElec2' },
    { title: 'Mechanical Arm Claw Controlled using Joystick', desc: 'https://github.com/ctrl-bers/MechnicalArmClawControlledUsingJoystick', link: 'https://github.com/ctrl-bers/MechnicalArmClawControlledUsingJoystick' }
  ];

  // Work experience with logo, company, place, date, and description
  const experience = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Googleplex-Patio-Aug-2014.JPG',
      company: 'Salenga Law Firm',
      place: 'Pasig, City Philippines',
      date: 'May - July 2025',
      title: 'Programmer',
      desc: [
        'Collaborate with the development team to design, develop, and maintain software applications using Rust.',
        'Take part in code reviews, debugging, and testing to uphold code quality and performance.',
        'Continuously learn and apply new programming techniques and technologies to improve development practices.',
        'Assist in the development of new features and the enhancement of existing systems.',
        'Work closely with team members to solve technical challenges and contribute to project success.'
      ]
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
      company: 'PhilHealth Regional Office VIII',
      place: 'Tacloban, City Philippines',
      date: 'Feb - May 2024',
      title: 'Technical Support Internship',
      desc: [
        'Provided technical support to users, resolving computer, and network issues.',
        'Implemented CI/CD and Executing Corporate Order 2021-0040 for Conducted Preventive Maintenance review best practices.',
        'Conducted Software Inventory'
      ]
    },
    
    // Add more as needed
  ];

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState('');
  const [contactError, setContactError] = useState('');

  // Modal state for cert image
  const [certModal, setCertModal] = useState(null);

  // Add educational attainment data
  const education = [
    {
      logo: require('./Pictures/SSU-Logo.png'),
      school: 'Samar State University',
      course: 'BS Computer Engineering',
      year: '2020 - 2024'
    },
    {
      logo: require('./Pictures/Samar_National_School_Logo.jpg'),
      school: 'Samar National School',
      course: 'Information Communication Technology',
      year: '2018 - 2020'
    },
    
  ];

  // Add subject state for Contact form
  const [contactSubject, setContactSubject] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  // Contact form handler
  const handleContactSubmit = e => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim() || !contactEmail.trim() || !contactSubject.trim() || !contactMessage.trim()) {
      setContactError('Please input your name, email, phone, subject, and message');
      setContactStatus('');
      return;
    }
    setContactError('');
    setContactStatus('Redirecting to Gmail...');
    // Open Gmail compose with pre-filled email and message
    const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=markberio30@gmail.com&su=${encodeURIComponent(contactSubject)}&body=${encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\nPhone: ${contactPhone}\n\n${contactMessage}`)}`;
    window.open(mailto, '_blank');
    setTimeout(() => {
      setShowThankYou(true);
      setContactStatus('');
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactSubject('');
      setContactMessage('');
    }, 1000);
  };

  // Modal content rendering
  const renderModal = () => {
    if (certModal) {
    return (
        <div className="modal-overlay animate__animated animate__fadeIn" style={{zIndex:9999, background:'rgba(0,0,0,0.85)'}}>
          <div className="modal-content card shadow-lg border-0 animate__animated animate__fadeInLeft" style={{background:'#232428', color:'#fff', maxWidth:'900px', margin:'4vh auto', borderRadius:'18px', padding:'2.5rem 2.5rem 2rem 2.5rem', boxShadow:'0 8px 32px 0 rgba(0,0,0,0.25)'}}>
            <div className="d-flex align-items-center justify-content-center mb-4" style={{minHeight:'48px', position:'relative'}}>
              <button className="custom-cert-modal-back btn btn-link p-0 me-3" onClick={() => setCertModal(null)} style={{fontSize:'1.7rem', position:'absolute', left:0}}><i className="bi bi-arrow-left"></i></button>
              <h3 className="custom-cert-modal-title m-0 w-100" style={{textAlign:'center'}}>Certification</h3>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src={certModal.img} alt={certModal.title} className="img-fluid rounded-3 mb-4" style={{maxHeight:'340px', background:'#fff', objectFit:'contain', boxShadow:'0 2px 16px 0 rgba(0,0,0,0.18)'}} />
              <div className="fw-bold mb-1" style={{fontSize:'1.3rem', color:'#fff'}}>{certModal.title}</div>
              <div className="mb-2" style={{color:'#fff'}}>{certModal.org}</div>
              <div className="mb-2" style={{color:'#fff'}}>{certModal.details}</div>
            </div>
          </div>
        </div>
      );
    }
    if (modalType === 'tech') {
      return (
        <div className="modal show d-block animate__animated animate__fadeIn" tabIndex="-1" role="dialog" style={{background: 'rgba(0,0,0,0.7)'}}>
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content bg-dark text-light border-0" style={{boxShadow:'none', border:'none'}}>
              <div className="modal-header border-0">
                <button type="button" className="btn btn-back-modern animate__animated animate__fadeInLeft" onClick={() => setModalType(null)}>
                  <i className="bi bi-arrow-left"></i> 
                </button>
                <h3 className="modal-title mx-auto fw-bold">Tech Stack</h3>
                <span></span>
              </div>
              <div className="modal-body">
                {Object.entries(techStack).map(([cat, items]) => (
                  <div key={cat} className="mb-4">
                    <h5 className="fw-bold">{cat}</h5>
                    <div className="mb-3 d-flex flex-wrap" style={{gap:'1.1rem 1.3rem'}}>
                      {items.map(i => <span className="badge rounded-pill border border-light text-light px-3 py-2" key={i}>{i}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (modalType === 'certs') {
      return (
        <div className="modal show d-block animate__animated animate__fadeIn" tabIndex="-1" role="dialog" style={{background: 'rgba(0,0,0,0.7)'}}>
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content bg-dark text-light border-0" style={{boxShadow:'none', border:'none', borderRadius:'14px', padding:'0.7rem 0.7rem'}}>
              <div className="modal-header border-0" style={{padding:'0.3rem 0.3rem'}}>
                <button type="button" className="btn btn-back-modern animate__animated animate__fadeInLeft" onClick={() => setModalType(null)} style={{fontSize:'1.1rem'}}>
                  <i className="bi bi-arrow-left"></i>
                </button>
                <h3 className="modal-title mx-auto fw-bold" style={{fontSize:'1.05rem'}}>All Certifications</h3>
                <span></span>
              </div>
              <div className="modal-body" style={{padding:'0.3rem 0.3rem'}}>
                <div className="row g-2">
                  {certs.map(c => (
                    <div className="col-md-6" key={c.title}>
                      <div className="card bg-black bg-opacity-75 border-0 shadow-sm p-2 mb-2 h-100 animate__animated animate__fadeInUp cert-modal-card cert-modal-card-hover" style={{cursor:'pointer', borderRadius:'10px', minHeight:'48px'}} onClick={() => setCertModal(c)}>
                        <div className="fw-bold mb-1 text-light" style={{fontSize:'0.93rem'}}>{c.title}</div>
                        <div className="text-secondary small" style={{fontSize:'0.89rem'}}>{c.org}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (modalType === 'projects') {
      return (
        <div className="modal-overlay animate__animated animate__fadeIn" style={{zIndex:9999, background:'rgba(0,0,0,0.85)', position:'fixed', top:0, left:0, right:0, bottom:0, overflowY:'auto', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div className="modal-content card shadow-lg border-0" style={{background:'#fff', color:'#232428', maxWidth:'900px', width:'95vw', maxHeight:'90vh', margin:'4vh auto', borderRadius:'16px', padding:'1.2rem 1.2rem 1rem 1.2rem', boxShadow:'0 8px 32px 0 rgba(0,0,0,0.25)', overflowY:'auto', display:'flex', flexDirection:'column'}}>
            <div className="d-flex align-items-center mb-3" style={{justifyContent: 'center'}}>
              <button
                className="btn btn-link p-0 me-3 btn-back-modern"
                onClick={() => setModalType(null)}
                style={{ color: darkMode ? '#fff' : '#232428', fontSize: '1.5rem', textDecoration: 'none', background: 'none', border: 'none', outline: 'none', boxShadow: 'none', transition: 'none', cursor: 'pointer' }}
                tabIndex={0}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
              <h3 className="mb-0 fw-bold w-100 text-center" style={{color:'#232428', fontSize:'1.15rem', letterSpacing:'1px', textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>All Projects</h3>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 flex-grow-1" style={{overflowY:'auto'}}>
              {projects.map((p, i) => (
                <div className="col d-flex" key={p.title} style={{minWidth:0}}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card card border-0 shadow-sm h-100 animate__animated animate__fadeInUp"
                    style={{
                      background: darkMode ? '#181818' : '#fff',
                      color: darkMode ? '#fff' : '#232428',
                      borderRadius: '9px',
                      padding: '0.45rem 0.45rem',
                      minHeight: '80px',
                      fontSize: '0.93rem',
                      textDecoration: 'none',
                      display: 'block',
                      cursor: 'pointer',
                      width: '100%',
                      boxShadow: darkMode ? '0 2px 8px 0 rgba(0,0,0,0.22)' : '0 2px 8px 0 rgba(0,0,0,0.10)'
                    }}
                  >
                    <div className="card-body p-2">
                      <div className="project-title fw-bold mb-1" style={{ color: darkMode ? '#fff' : '#232428', fontSize:'0.98rem' }}>{p.title}</div>
                      <div className="project-desc small mb-1" style={{ color: darkMode ? '#fff' : '#232428', fontSize:'0.89rem' }}>{p.desc}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (showAllProjects) {
      const handleCloseAllProjects = () => {
        setAllProjectsFadeOut(true);
        setTimeout(() => {
          setShowAllProjects(false);
          setAllProjectsFadeOut(false);
        }, 400); // match animation duration
      };
      return (
        <div className={`modal-overlay animate__animated ${allProjectsFadeOut ? 'animate__fadeOut' : 'animate__fadeIn'}`} style={{zIndex:9999, background:'rgba(0,0,0,0.85)'}}>
          <div className={`modal-content projects-modal animate__animated ${allProjectsFadeOut ? 'animate__fadeOutLeft' : 'animate__fadeInLeft'}`} style={{background:'#232428', color:'#fff', maxWidth:'800px', margin:'7vh auto 4vh auto', borderRadius:'14px', padding:'1.3rem 1rem 1rem 1rem', boxShadow:'0 4px 16px 0 rgba(0,0,0,0.18)'}}>
            <div className="modal-header border-0" style={{padding:'0.4rem 0.4rem', display:'flex', alignItems:'center', minHeight:'40px'}}>
              <button
                type="button"
                className={`btn btn-back-modern animate__animated animate__fadeInLeft d-flex align-items-center gap-2`}
                onClick={handleCloseAllProjects}
                style={{fontSize:'1.08rem', color:'#fff', fontWeight:600, background:'none', outline:'none', boxShadow:'none', lineHeight:1, textDecoration:'none', padding:0}}
              >
                <i className="bi bi-arrow-left" style={{fontSize:'1.25rem', color:'#fff'}}></i>
                <span style={{fontWeight:600, fontSize:'0.98rem', color:'#fff', letterSpacing:'0.5px'}}>Back to Home</span>
              </button>
              <h3 className="modal-title mx-auto fw-bold" style={{fontSize:'1.08rem', color:'#fff', marginLeft:'-2rem'}}>All Projects</h3>
              <span></span>
            </div>
            {/* Responsive grid for projects */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-2">
              {projects.map((p, i) => (
                <div className="col d-flex" key={p.title}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card card bg-dark bg-opacity-75 border-0 shadow-sm h-100 animate__animated animate__fadeInUp"
                    style={{ color: '#fff', borderRadius:'9px', padding:'0.45rem 0.45rem', minHeight:'80px', fontSize:'0.93rem', textDecoration:'none', display:'block', cursor:'pointer', width:'100%' }}
                  >
                    <div className="card-body p-2">
                      <div className="project-title fw-bold mb-1" style={{ color: '#fff', fontSize:'0.98rem' }}>{p.title}</div>
                      <div className="project-desc small mb-1" style={{ color: '#fff', fontSize:'0.89rem' }}>{p.desc}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // Consistent icon and header style
  const sectionHeaderStyle = {
    color: darkMode ? '#fff' : '#232428',
    fontSize: '1.18rem',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    letterSpacing: '0.01em',
  };
  const sectionIconStyle = {
    color: darkMode ? '#fff' : '#232428',
    fontSize: '1.5rem',
    marginRight: '0.5rem',
    verticalAlign: 'middle',
  };
  const plainLinkStyle = {
    color: darkMode ? '#fff' : '#232428',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '1.05rem',
  };

  return (
    <div className={`App${darkMode ? '' : ' light-mode'}`}> 
      {/* Modal rendering (Tech Stack, Certifications, Projects) */}
      {renderModal()}
      <div className={modalType ? 'd-none' : ''}>
        <div className="main-content-container px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-md-4" style={{maxWidth:'1200px', margin:'0 auto'}}>
          {/* Profile Section - Clean, centered layout without card */}
          <div className="profile-section d-flex flex-column align-items-center justify-content-center mb-4 position-relative" style={{marginTop:'32px', marginBottom:'32px'}}>
            {/* Modern theme switch - right side of profile, only one switch */}
            <div className="theme-switch" style={{position:'absolute', top:0, right:0, zIndex:1000}}>
              <div
                className={`switch${!darkMode ? ' light' : ' dark'}`}
                onClick={() => setDarkMode(d => !d)}
                aria-label="Toggle dark/light mode"
                style={{transition:'background 0.2s'}}
              >
                <span
                  className="slider"
                  style={{
                    left: darkMode ? 25 : 3,
                    background: darkMode ? '#232428' : '#fff',
                    color: darkMode ? '#fff' : '#232428',
                    transition: 'left 0.22s cubic-bezier(.4,0,.2,1), background 0.2s, color 0.2s',
                    position: 'absolute',
                    top: 3,
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {darkMode ? (
                    <i className="bi bi-moon" style={{fontSize:'1.1em', color:'#fff'}}></i>
                  ) : (
                    <i className="bi bi-brightness-high" style={{fontSize:'1.1em', color:'#232428'}}></i>
                  )}
                </span>
              </div>
            </div>
            <img className="profile-img rounded-4" src={require('./Pictures/MyProfile.jpg')} alt="Mark Berio" style={{width: '148px', height: '148px', maxWidth:'28vw', maxHeight:'28vw', minWidth:'90px', minHeight:'90px', objectFit: 'cover', aspectRatio: '1 / 1', boxShadow:'0 4px 24px 0 rgba(0,0,0,0.18)', marginBottom:'14px', borderRadius:'16px', border:'4px solid #232a34'}} />
            <h2 className="profile-name fw-bold mb-1" style={{color:'#fff', fontSize:'2rem', lineHeight:'1.1', letterSpacing:'2px', textAlign:'center', width:'100%'}}>Mark Berio</h2>
            <div className="profile-location mb-1 d-flex align-items-center justify-content-center w-100" style={{color:'#fff', fontSize:'18px', fontWeight:500, textAlign:'center'}}>
              <i className="bi bi-geo-alt" style={{color:'#fff', fontSize:'25px', marginRight:'0.5rem', verticalAlign:'middle'}}></i>
              Samar, Philippines
            </div>
            <div className="profile-title mb-2" style={{color:'#fff', fontSize:'20px', fontWeight:500, letterSpacing:'1px', marginTop: '-2px', textAlign:'center', width:'100%'}}>Computer Engineer</div>
            <div className="profile-actions d-flex flex-row gap-3 mt-1 align-items-center justify-content-center w-100" style={{marginTop:'2px'}}>
              <a href="https://www.linkedin.com/in/mark-berio" target="_blank" rel="noopener noreferrer" className="btn p-0 border-0 bg-transparent d-flex align-items-center justify-content-center" style={{lineHeight:1}} aria-label="LinkedIn">
                <i className="bi bi-linkedin" style={{fontSize:'1.7rem', color:'#fff'}}></i>
              </a>
              <a href="https://github.com/markberz" target="_blank" rel="noopener noreferrer" className="btn p-0 border-0 bg-transparent d-flex align-items-center justify-content-center" style={{lineHeight:1}} aria-label="GitHub">
                <i className="bi bi-github" style={{fontSize:'1.7rem', color:'#fff'}}></i>
              </a>
            </div>
          </div>
          {/* About, Tech Stack, Work Experience, Certifications */}
          <div className="row g-4 mb-4">
            <div className="col-md-6 d-flex flex-column gap-4">
              {/* About Section */}
              <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm flex-fill animate__animated animate__fadeInUp" style={{color:'#fff'}}>
                <div className="card-body" style={{color:'#fff'}}>
                  <h5 className="card-title mb-3 d-flex align-items-center" style={sectionHeaderStyle}>
                    <i className="bi bi-briefcase" style={sectionIconStyle}></i> About
                  </h5>
                  <div className="card-text">
                   Hi, I'm Mark Berio, a computer engineer with a passion for building user-friendly and efficient digital solutions. I have learned web development skills including HTML, CSS, and JavaScript, and have hands-on experience developing Windows applications using VB.NET. I also specialize in building embedded system projects and writing low-level code to interface with hardware.<br></br><br></br>

In addition to development, I have a strong background in technical support, where I handled troubleshooting for both hardware and software issues. This experience has strengthened my problem-solving skills and given me a deeper understanding of system-level operations. <br></br><br></br>

Currently, I am learning this React.js for front-end development, along with Python, Node.js, Machine Learning, TypeScript, Rust, and Actix Web for back-end development. I'm always eager to explore new technologies and develop solutions that seamlessly combine functionality and design.
                  </div>
                </div>
              </div>
              {/* Tech Stack Section */}
              <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm flex-fill animate__animated animate__fadeInUp" style={{color:'#fff', padding:'1.25rem 1.25rem'}}>
                <div className="card-body" style={{color:'#fff'}}>
                  <h5 className="card-title mb-3 d-flex align-items-center" style={sectionHeaderStyle}>
                    <i className="bi bi-cpu" style={sectionIconStyle}></i> Tech Stack
                    <span className="view-all ms-auto plain-link" onClick={() => setModalType('tech')} style={plainLinkStyle}>View All</span>
                  </h5>
                  {Object.entries(techStack).map(([cat, items]) => (
                    <div key={cat} className="mb-3">
                      <div className="fw-bold mb-2" style={{color:'#fff'}}>{cat}</div>
                      <div className="tech-badges-row d-flex flex-wrap gap-2">
                        {items.map(i => (
                          <span className="tech-badge-modern" key={i}>{i}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column gap-4">
              {/* Work Experience Section */}
              <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm flex-fill animate__animated animate__fadeInUp" style={{color:'#fff'}}>
                <div className="card-body" style={{color:'#fff'}}>
                  <h5 className="card-title mb-3 d-flex align-items-center" style={sectionHeaderStyle}>
                    <i className="bi bi-briefcase" style={sectionIconStyle}></i> Experience
                  </h5>
                  {/* Experience Section timeline: now simple list, no vertical line or circles */}
                  <div className="exp-timeline" style={{paddingLeft:0, position:'static'}}>
                    {experience.map((exp, idx) => (
                      <div className={`exp-item animate__animated animate__fadeInUp${idx===0 ? ' active' : ''}`} key={exp.title+idx} style={{position:'static', minHeight:'unset', marginBottom:'1.2rem', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
                        <img src={
                          exp.company === 'Salenga Law Firm'
                            ? require('./Pictures/salenga_logo.jpg')
                            : exp.company === 'PhilHealth Regional Office VIII'
                            ? require('./Pictures/PhilHealth.jpg')
                            : exp.logo
                        } alt={exp.company} className="rounded-2 mb-2" style={{width:48, height:48, objectFit:'cover', background:'#fff'}} />
                        <div>
                          <div className="fw-bold" style={{color:'#fff'}}>{exp.title}</div>
                          <div className="small" style={{color:'#fff'}}>{exp.company} &middot; {exp.place}</div>
                          <div className="small mb-1" style={{color:'#fff'}}>{exp.date}</div>
                          <ul className="mb-0 ps-3" style={{textAlign:'left', margin:'0 auto', maxWidth:'700px'}}>
                            {exp.desc.map((d, i) => <li key={i} style={{color:'#fff', marginBottom:'0.3rem'}}>{d}</li>)}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Certifications Section */}
              <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm flex-fill animate__animated animate__fadeInUp" style={{color:'#fff', padding:'1.2rem 1.2rem', borderRadius:'18px'}}>
                <div className="card-body" style={{color:'#fff', padding:'0.7rem 0.7rem'}}>
                  <h5 className="card-title mb-3 d-flex align-items-center" style={{...sectionHeaderStyle, fontSize:'1.1rem'}}>
                    <i className="bi bi-patch-check" style={{...sectionIconStyle, fontSize:'1.2rem'}}></i> Certifications
                    <span className="view-all ms-auto plain-link" onClick={() => setModalType('certs')} style={plainLinkStyle}>View All</span>
                  </h5>
                  <div className="row g-2">
                    {certs.slice(0, 4).map((c, i) => (
                      <div className="col-12" key={c.title}>
                        <div className="cert-card card bg-dark bg-opacity-75 border-0 shadow-sm p-2 animate__animated animate__fadeInUp" style={{color:'#fff', cursor:'pointer', borderRadius:'12px', minHeight:'60px'}} onClick={() => setCertModal(c)}>
                          <b style={{color:'#fff', fontSize:'1.05rem'}}>{c.title}</b><br /><span className="small" style={{color:'#fff', fontSize:'0.97rem'}}>{c.org}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Projects Section */}
          <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm mb-4 animate__animated animate__fadeInUp" style={{color:'#fff', borderRadius:'18px', padding:'1.2rem 1.2rem'}}>
            <div className="card-body" style={{color:'#fff', padding:'0.7rem 0.7rem'}}>
              <h5 className="card-title mb-3 d-flex align-items-center justify-content-between" style={sectionHeaderStyle}>
                <span><i className="bi bi-layout-wtf" style={{...sectionIconStyle, fontSize:'1.2rem'}}></i> Projects</span>
                 <span className="view-all ms-auto plain-link" onClick={() => setModalType('projects')} style={plainLinkStyle}>View All</span>
              </h5>
              <div className="row g-2">
                {projects.slice(0, 4).map((p, i) => (
                  <div className="col-md-6" key={p.title}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card card bg-dark bg-opacity-75 border-0 shadow-sm h-100 animate__animated animate__fadeInUp"
                      style={{color:'#fff', cursor:'pointer', borderRadius:'12px', padding:'0.7rem 0.7rem', minHeight:'120px', textDecoration:'none', display:'block'}}
                    >
                      <div className="card-body p-2">
                        <div className="project-title fw-bold mb-1" style={{color:'#fff', fontSize:'1.05rem'}}>{p.title}</div>
                        <div className="project-desc small mb-1" style={{color:'#fff', fontSize:'0.97rem'}}>{p.desc}</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Education and Contact Section */}
          <div className="row g-4 mb-4">
            <div className="col-md-6 d-flex flex-column gap-4">
              {/* Education Section - all white text */}
              <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm flex-fill animate__animated animate__fadeInUp" style={{color:'#fff', padding:'1.25rem 1.25rem'}}>
                <div className="card-body" style={{color:'#fff'}}>
                  <h5 className="card-title mb-3 d-flex align-items-center" style={sectionHeaderStyle}>
                    <i className="bi bi-mortarboard" style={sectionIconStyle}></i> Education
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    {education.map((edu, i) => (
                      <div className="d-flex align-items-center gap-3" key={edu.school + i} style={{minHeight: '64px'}}>
                        <img src={edu.logo} alt={edu.school} style={{width:56, height:56, objectFit:'contain', background:'#fff', borderRadius:'10px', flexShrink:0}} />
                        <div className="d-flex flex-column justify-content-center" style={{lineHeight:1.2, textAlign:'left'}}>
                          <div className="fw-bold" style={{fontSize:'1.13rem', color:'#fff', textAlign:'left'}}>{edu.school}</div>
                          <div className="small" style={{color:'#fff', textAlign:'left'}}>{edu.course}</div>
                          <div className="small" style={{color:'#fff', textAlign:'left'}}>Graduated: {edu.year}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column gap-4">
              {/* Contact Me Section - new row/column layout */}
              <div className="card bg-secondary bg-opacity-10 border-0 shadow-sm animate__animated animate__fadeInUp" style={{color:'#fff'}}>
                <div className="card-body" style={{color:'#fff'}}>
                  <h5 className="card-title mb-3 d-flex align-items-center" style={sectionHeaderStyle}>
                    <i className="bi bi-envelope" style={sectionIconStyle}></i> Contact Me
                  </h5>
                  <form onSubmit={handleContactSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label"><b>Full Name</b></label>
                        <input type="text" className="form-control bg-dark text-light border-0" value={contactName} onChange={e => setContactName(e.target.value)} required placeholder="Full Name" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label"><b>Phone Number</b></label>
                        <input type="tel" className="form-control bg-dark text-light border-0" value={contactPhone} onChange={e => setContactPhone(e.target.value)} required placeholder="Phone Number" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label"><b>Email</b></label>
                        <input type="email" className="form-control bg-dark text-light border-0" value={contactEmail} onChange={e => setContactEmail(e.target.value)} required placeholder="Email Address" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label"><b>Subject</b></label>
                        <input type="text" className="form-control bg-dark text-light border-0" value={contactSubject} onChange={e => setContactSubject(e.target.value)} required placeholder="Subject" />
                      </div>
                      <div className="col-12">
                        <label className="form-label"><b>Message</b></label>
                        <textarea className="form-control bg-dark text-light border-0" rows="3" required value={contactMessage} onChange={e => setContactMessage(e.target.value)} placeholder="Message" />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-dark text-white fw-bold px-4 py-2 rounded-pill shadow-sm border-0 mt-3 send-btn-hover" style={{fontSize:'1.1rem', background:'#181818', color:'#fff', transition:'background 0.2s, box-shadow 0.2s', boxShadow:'0 2px 12px 0 rgba(0,0,0,0.18)'}}>Send Message</button>
                    {contactStatus && <span className="ms-3 text-success fw-bold">{contactStatus}</span>}
                    {contactError && <span className="ms-3 text-danger fw-bold">{contactError}</span>}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer text-center text-secondary mt-5">© 2025 Mark Berio. All rights reserved.</div>
        </div>
      </div>
      {/* Thank you pop message as fixed modal at the top of the whole page */}
      {showThankYou && (
        <div className="modal-overlay animate__animated animate__fadeIn" style={{zIndex:99999, background:'rgba(0,0,0,0.18)', position:'fixed', top:0, left:0, right:0, bottom:0, display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'auto'}}>
          <div className="modal-content card shadow-lg border-0 d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeInDown" style={{background:'#232428', color:'#fff', maxWidth:'350px', borderRadius:'16px', padding:'2rem 1.5rem', boxShadow:'0 8px 32px 0 rgba(0,0,0,0.25)', position:'relative'}}>
            <span style={{fontSize:'1.1rem', textAlign:'center', marginBottom:'1.2rem'}}>Thanks for reaching out!! I'll get back to you as soon as possible.</span>
            <button className="btn btn-outline-light mt-2 px-4 py-2" style={{borderRadius:'8px', fontSize:'1rem'}} onClick={() => setShowThankYou(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
