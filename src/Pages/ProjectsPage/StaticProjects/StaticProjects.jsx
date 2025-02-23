import React, { useState } from 'react';
import { static_projects } from '../../../data.js';
import { Container, Row, Col } from 'react-bootstrap';

const StaticProjects = () => {
  const [projects] = useState(static_projects);

  return (
    <div className="static-projects-card">
      <Container>
        <h2 className='text-center'>Static Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col lg={3} key={index}>
              <div className="box">
                <div className="card">
                  <img src={project.img} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.destination}>Show</a>
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