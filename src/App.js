import './App.css';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import ClinicCard from './components/clinicCard';
import Specialist from './components/Specialist';
import doctor from "./images/doctor.png";
import care from "./images/care.png";
import van from "./images/van.PNG";
import ReviewCard from './components/ReviewCard';


function App() {
  return (
    <>

      {/* Header menu section */}
      <div className='header-menu'>
        <Header />
      </div>
      {/* Appointment section starts from here */}

      <div className="appointment-wrapper">
        <div className="left-section">
          <h4>Welcome to MediCare+ Clinic</h4>
          <h1 className='main-heading'>Best Specialists</h1>
          <p className='common-para'>We are on the leading edge of cancer care. Providing the full continuum of cancer treatment and supportive care services in a single convient location.</p>
          <a className="btn">Make an Appointment</a>
          <a className="second-btn">Departments</a>
        </div>
        <div className="right-section"></div>
      </div>

      {/* Service section starts from here */}
      <div className='wrapper-width'>
        <div>
          <h1 className='main-heading text-center'>Our Services</h1>
          <p className='common-para text-center'>We provide the most full medical services, so every person could <br></br> have the opportunity to recieve qualitative medical help.</p>
        </div>
        <div className='service-section'>
          <ServiceCard Services="Dental Care" />
          <ServiceCard Services="Pulmonary" />
          <ServiceCard Services="Neurological" />
          <ServiceCard Services="Prediatrics" />
        </div>
      </div>

      {/* Innovative section starts from here */}

      <div className="wrapper wrapper-width innovative-wrapper">
        <div className="left-section">
          <h1 className='main-heading'>Clinic With Innovative</h1>
          <p className='common-para'>We provide the most full medical services, so every person could <br></br> have the opportunity to recieve qualitative medical help.</p>
          <a className="btn">Learn More</a>
        </div>
        <div className="three-img-section">
          <ClinicCard image={doctor} ServiceName="Qualified Doctors" />
          <ClinicCard rightImg="right-img" image={care} ServiceName="Emergency Care" />
          <ClinicCard image={van} ServiceName="24 Hour Service" />
        </div>
      </div>
      {/* Specialist section starts from here */}
      <div className='wrapper-width'>
        <div>
          <h1 className='main-heading text-center'>We Have The Best Specialist </h1>
          <p className='common-para text-center'>We have a wide experience in experience design and strategy, <br></br>with locally-rooted knowledge.</p>
        </div>

        <div className='specialist-section'>
          <Specialist SpecialistName="Dr. Awaatif Al" SpecialistField="Dental Care" />
          <Specialist SpecialistName="Dr. Filipa Gaspar" SpecialistField="Cardiology" />
          <Specialist SpecialistName="Dr. Sukhmeet Gorae" SpecialistField="Neurological" />
          <Specialist SpecialistName="Dr. Siri Jakobsson" SpecialistField="Prediatrics" />
        </div>
      </div>

      {/* Reviews section starts from here */}

      <div className='wrapper-width'>
        <div>
          <h1 className='main-heading'>What Our Customers Say </h1>
        </div>
      </div>
      <div className='review-section'>
        <ReviewCard />
      </div>

      {/* Newsletter section starts from here */}


      <div className='wrapper-width newsletter-section'>
        <div className='newsletter-text'>
          <h1 className='main-heading text-center'>Subscribe to Newsletter </h1>
          <p className='common-para text-center'>We have a wide experience in experience design and strategy.</p>
        </div>

        <div className='input-field-wrapper'>
          <input type="text" placeholder='Enter your email address' />
          <a className="btn">Send Now</a>
        </div>

      </div>

      {/* Footer section starts from here */}

      <div className='wrapper-width footer-section'>
        <Header />
      </div>


      <footer>
        <div>
          <a><i class="fa-brands fa-facebook-f"></i></a>
          <a><i class="fa-brands fa-google"></i></a>
          <a><i class="fa-brands fa-twitter"></i></a>
        </div>
        <div className='copyright'>@2022 Copyright - 2022</div>
      </footer>

    </>
  );
}

export default App;
