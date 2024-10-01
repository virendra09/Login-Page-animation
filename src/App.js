import React, { useEffect } from 'react';
import './App.css';
import logo from './images/logo.png'; // Ensure this is the correct path and logo file
import upiLogo from './images/upi-logo.jpg'; // Path to the UPI logo
import phoneIcon from './images/call-logo.jpg'; // Path to the phone icon
import chatIcon from './images/cloord-logo.png'; // Path to the chat icon
import whatsappIcon from './images/whatsApp-logo.png'; // Path to the WhatsApp icon

const sectionsData = [
  { 
    id: 'section1', 
    title: 'Office & Student', 
    description: 'Pay Student Fees', 
    upiPayment: true // Adding a flag to identify the UPI Payment section
  },
  { 
    id: 'section2', 
    title: 'Online Student Management', 
    description: 'Manage admissions, fees, and records seamlessly.', 
    styledCard: true // Adding a flag to identify the styled card section
  },
  { 
    id: 'section5', 
    title: 'Mark Sheet Generation & Bus Alerts', 
    description: 'Design mark sheets and receive bus arrival alerts.',
    content: {
      heading: 'About Cloord Solution',
    }
  },
  { 
    id: 'section6', 
    title: 'Create a Free Account', 
    description: 'Create a free account to access all features.', 
    form: true 
  },
  { 
    id: 'section7', 
    title: 'Download Cloord app', 
    description: 'Download link for Android and Apple app.',
    content: {
      heading: 'Download the Cloord App',
      divs: [
        { id: 'android', text: 'Download for Android', link: 'https://play.google.com/store/apps/details?id=com.cloord' },
        { id: 'ios', text: 'Download for iOS', link: 'https://apps.apple.com/us/app/cloord/id1234567890' },
      ],
    }
  },
  { 
    id: 'section8', 
    title: 'Contact & Legal Information', 
    description: 'Phone: +91 7587211535 | GST: 13264526546 | Raipur 493114' 
  }
];

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.page-section');
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPos > sectionTop && scrollPos < sectionTop + sectionHeight) {
          section.classList.add('active-section');
        } else {
          section.classList.remove('active-section');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-menu">
          <li onClick={() => scrollToSection('section1')}>Home</li>
          <li onClick={() => scrollToSection('section2')}>Services</li>
          <li onClick={() => scrollToSection('section5')}>About</li>
          <li onClick={() => scrollToSection('section6')}>Account</li>
          <li onClick={() => scrollToSection('section7')}>Download</li>
          <li>
            <button onClick={() => scrollToSection('student-section')} className="nav-button">Student</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('office-section')} className="nav-button">Office</button>
          </li>
        </ul>
      </nav>

      {/* Sections Mapping */}
      {sectionsData.map((section) => (
        <section id={section.id} key={section.id} className="page-section">
          <div className="content">
            {section.id === 'section2' && <strong className='section2-heading'>Discover Cloord Solutions</strong>}
            
            {/* UPI Payment Section */}
            {section.upiPayment && (
              <div className='first-section'>
                <div className="logo-container">
                  <img src={upiLogo} alt="UPI Logo" className="upi-logo" />
                  <h1>Pay Student Fees</h1>
                </div>

                <p className="info-text">
                  You can cancel your payment within 2 hours of making the transaction. If the payment has already been processed, a refund will still be issued directly to your bank account.
                </p>

                <div className="input-container">
                  <input type="text" placeholder="Enter registered number" className="input-field" />
                </div>

                <div className="help-section">
                  <p>For help :</p>
                  <div className="help-icons">
                    <img src={phoneIcon} alt="Phone" className="help-icon" />
                    <img src={chatIcon} alt="Chat" className="help-icon" />
                    <img src={whatsappIcon} alt="WhatsApp" className="help-icon" />
                  </div>
                </div>

                <p className="footer-text">
                  For School and coaching <span className="highlight">Get your own free App</span>
                </p>
              </div>
            )}

            {/* Section 5 Content */}
            {section.id === 'section5' && (
              <div className='about-section'>
                <h1>{section.content.heading}</h1>
                <p>Cloord Solution Pvt Ltd is dedicated to transforming the way educational institutions manage their operations in the digital era. Specializing in online student management, digital office solutions, and online record maintenance, we provide a seamless and efficient platform for school and coaching to handle all their administrative tasks with ease. <br /><br />Our comprehensive services are tailored to meet the unique needs of schools and coaching, ensuring that everything from student data to essential records is securely maintained and easily accessible. Whether it's streamlining student management or automating office functions, Cloord Solution Pvt Ltd is your trusted partner in creating a fully digital, paperless environment.<br /><br />At Cloord Solution, we believe in driving innovation to make schools and coaching management simpler, smarter, and more efficient, enabling educators to focus on what matters most: student success.</p>
              </div>
            )}

            {/* Form Section */}
            {section.form && (
              <form>
                <h1>Create a free account</h1>
                <h3>to access all above features</h3>
                
                <div className="radio-buttons">
                  <label className="radio-container">
                    For School
                    <input type="radio" name="accountType" value="school" required />
                    <span className="checkmark"></span>
                  </label>
                  <label className="radio-container">
                    For Coaching
                    <input type="radio" name="accountType" value="coaching" required />
                    <span className="checkmark"></span>
                  </label>
                </div>
                
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="phone">Phone number:</label>
                <input type="tel" id="phone" name="phone" required />
                
                <button type="submit">Send OTP</button>
              </form>
            )}

            {/* Styled Card Section */}
            {section.styledCard && (
              <div className='cards'>
                <div className="styled-card">
                  <p><strong>Automatic, Biometrics and Manual Attendance:</strong><br /> We offer GPS-based automatic attendance, along with manual and biometric attendance options for flexible and reliable tracking.</p>
                  <p><strong>Online student management system:</strong><br /> We provide digital admissions, online fee management, and personal memory, all integrated within a seamless digital student management system.</p>
                  <p><strong>Automated Digital office:</strong><br /> We offer automated income statements with comprehensive expense management software that handles salaries and expenses, while providing detailed profit and loss reports.</p>
                </div>
                <div className="styled-card">
                  <p><strong>Automatic group for students, staff and office:</strong><br />Our system automatically creates groups for teachers, students, and office staff, allowing seamless sharing of messages and files from both sides. There's no need to manually manage or update groups when staff or students change.</p>
                  <p><strong>One-click billing with digital and physical receipts:</strong><br /> We offer billing software that automatically generates bills without manual entry, sends them to parents, and allows for easy printing</p>
                  <p><strong>Accept payment online from parents:</strong><br /> Accept online payments from parents directly to your bank account with no setup or billing issues. We automatically send bills to parents and record the details in your office's income statement.</p>
                </div>
                <div className="styled-card">
                  <p><strong>Automatically generate mark sheets in various designs and themes:</strong><br />Teachers can enter student marks in their app, and we will compute the marks, calculate the percentage, and assign grades according to the results. Additionally, we can format the result according to your preferred design.</p>
                  <p><strong>Receive an alert 5 minutes before the bus arrives at your home.</strong><br /> Our GPS-based technology allows bus drivers to share live locations with all students and send alerts before arrival. No more waiting for the bus for hours—just receive a notification and head outside when it's time!</p>
                  <p><strong>Safety, security, and support are our top priorities:</strong><br /> We prioritize addressing all security concerns by offering advanced secure technology and comprehensive customer support. Our dedicated team is always available to assist you with any issues, ensuring that you have the help you need whenever you need it.</p>
                </div>
              </div>
            )}

            {/* Download Section */}
            {section.id === 'section7' && (
              <div className='download-section'>
                <h1>{section.content.heading}</h1>
                <div className="flex-container">
                  {section.content.divs.map((div) => (
                    <div key={div.id} className="download-card">
                      <h2>{div.text}</h2>
                      <a href={div.link} target="_blank" rel="noopener noreferrer" className="download-button">Download</a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Section */}
            {section.id === 'section8' && (
              <footer className="footer">
                <div className="footer-container">
                  <div className="footer-section">
                    <ul>
                      <li>About Cloord</li>
                      <li>Pricing</li>
                      <li>Contact us</li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <ul>
                      <li>Legal</li>
                      <li>Terms and Services</li>
                      <li>Privacy Policy</li>
                      <li>Cloord Policy</li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <p>Cloord Solution PVT LTD</p>
                    <p>GST: 13264526546</p>
                    <p>HQ: Raipur 493114</p>
                    <p>Phone: +91 7587211535</p>
                  </div>
                </div>
                <div className="footer-bottom">
                  <p>All rights reserved 2023-2024</p>
                  <p>By @Cloord Solution Pvt Ltd</p>
                </div>
              </footer>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
