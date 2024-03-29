import React from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-awesome-reveal';
const Section = () => { 
  return (
    <>
    <Header/>
    <div className="container">
       <div className="card bg-black text-white ">
       <div className="row g-0">
            <div className="col-md-9">
                <div className="card-body">
                    <div className="card-title fs-1">
                        welcome to my world
                    </div>
                    <Fade direction="left" delay={3} duration={3000} rotated={369}>
                         <h1 className="display-4"><strong>I am Ahmad Ullah Mukhlis full stack web developer</strong></h1>
                    </Fade>
                    <p className='mb-3'>
                    As a passionate and dedicated full-stack web developer, I specialize in creating high-quality,
                     robust, and user-friendly web applications. My expertise in a diverse set of technologies, 
                     including Laravel, PHP, React, Next.js, Vue.js, and various database management systems,
                     enables me to deliver comprehensive web solutions that meet and exceed client expectations.
                    </p>
                    <div className="d-block mt-5">
                     <a  className='d=inline-block mx-3' href="mailto:ahmadullahmukhlis2019@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" size='xl' color='gold' />
                     </a>
                     <a className="d=inline-block mx-3"  href="https://www.linkedin.com/in/ahmad-ullah-mukhlis-3a6962272/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size='xl'  color='gold'/>
                    </a>
                    <a className='d=inline-block mx-3'  href="https://www.facebook.com/nasarimukhlis/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon="fa-brands fa-facebook"  size='xl' color='gold' />
                    </a>
                    <a className='d=inline-block mx-3'  href="https://github.com/ahmadullahmukhlis" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-github"  size='xl' color='gold' />
                    </a>
                    <a className='d=inline-block mx-3'  href="https://www.youtube.com/channel/UCtO4W3H2vjA1Q9z8T5Yd4rQ" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-youtube"  size='xl' color='gold' />
                    </a>
                    </div>
                    
                </div>
            </div>
           <div className="col-md-3">
              <Fade>
                 <img className='img-fluid' src="./ahmad.png" alt="Ahmad" />
              </Fade>
            </div>
           </div>
       </div>
    </div>
    </>
  );
};

export default Section;
