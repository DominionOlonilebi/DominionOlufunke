import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section fluid className='footer-section text-center mt-5 pt-5'>
        
       <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4'>
            <h2 style={{color: "#e7008a"}} className='fw-bold'>DM TECH</h2>
            <p className='text-light mb-4'>Proficient in transforming conceptual designs into fully functional sites. with expertise in <span style={{color: "#e7008a"}}>MERN</span>. React, JavaScript, Nextjs, Express, Node.js, MongoDB, Redux Toolkits, Postgres, Context, WordPress, Bootstrap, Tailwind i craft intuitive user interfaces and seamless user experiences</p>
          </div>
          <div className='col-md-3'>
            
          </div>
          <div className='col-md-4'>
            <p className=' text-secondary mb-3 fs-5'>Check out my Live Projects</p>
            <div className='mb-3'>
            <a href='https://kta-webapp.vercel.app/' className='text-light'>Kwara Tech Academy</a>
              </div>
              <div className='mb-3'>
              <a href='https://www.myvault.ng/' className='text-light'>MyVault vest limited</a>
              </div>
              <div className='mb-3'>
              <a href='https://www.powertoolsintltd.com/' className='text-light'>Powertools INC</a>
              </div>
              <div className='mb-3'>
              <a href='https://bttrschools.com/' className='text-light'>Bttrschools Website</a>
              </div>
              <div className='mb-3'>
              <a href='https://tech2grassroots.africa/' className='text-light'>Tech2grassroots Website</a>
              </div>
          </div>
        </div>
       </div>
       <p className="text-center fs-5 mt-3">Follow Us</p>

          <a
            href="/"
            className="social-media mx-3 fs-3"
          >
            <FaLinkedin />
          </a>
          
          <a href="/" className="social-media mx-3 fs-3">
            <FaTwitter />
          </a>
          <a href="/" className="social-medias mx-3 fs-3">
            <FaInstagram />
          </a>
          <a
            href="/"
            className="social-media mx-3 fs-3"
          >
            <FaYoutube />
          </a>
       <hr className='text-light'/>
       <p className='py-4 footer-text'>&copy; {currentYear} Dominion PortfolioH. Crafted by me</p>
    </section>
  )
}

export default Footer