import React, { useState } from 'react';
import { javaScriptProjects } from '../../../data.js';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './JavascriptProjects.css';

const JavascriptProjects = () => {
  // Component States
  const [projects] = useState(javaScriptProjects);

  return (
    <div className="static-projects-card mt-5 mb-5">
      <Container>
        <motion.h2 
          className='text-center mb-4'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <i className="fa-brands fa-square-js"></i> JavaScript Projects
        </motion.h2>

        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} xl={3} key={index}>
              <motion.div 
                className="box mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="card shadow-lg">
                  <img src={project.img} className="card-img-top" alt={project.title} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a className='btn btn-success' target="_blank" href={project.destination}>
                      Visit Website
                    </a>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default JavascriptProjects;