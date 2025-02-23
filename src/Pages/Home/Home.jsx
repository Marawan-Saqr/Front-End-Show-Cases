import React from 'react';
import StaticProjectsSection from './StaticProjectsSection/StaticProjectsSection.jsx';
import JavaScriptSection from './JavaScriptSection/JavaScriptSection.jsx';

const Home = () => {
  return (
    <div>
      <StaticProjectsSection />
      <hr className='container' />
      <JavaScriptSection />
    </div>
  )
}

export default Home;