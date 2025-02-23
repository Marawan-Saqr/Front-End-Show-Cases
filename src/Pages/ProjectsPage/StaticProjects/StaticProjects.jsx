import React, { useState } from 'react';
import { static_projects } from '../../../data.js';
import { Container, Row, Col } from 'react-bootstrap';
import './StaticProjects.css';


const StaticProjects = () => {
  const [projects] = useState(static_projects);

  return (
    <div className="static-projects-card mt-5 mb-5">
      <Container>
        <h2 className='text-center'>Static Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col lg={3} key={index}>
              <div className="box mb-4">
                <div className="card">
                  <img src={project.img} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{project.title}</h5>
                    <p className="card-text text-center">{project.description}</p>
                    <a className='btn btn-success' target="_blank" href={project.destination}>Visit Website</a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StaticProjects;