import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
const Projects = () => { // Destructure children from props
  return (
  
   <>
      <Header />
      <Section/>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-8">

            </div>
            <div className="col-md-4">
                  <img src="/ahmad.jpg" alt="Ahmad" />
            </div>
        </div>
    </div>
   </>
      
 
  );
};

export default Projects;
