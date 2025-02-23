import './JavaScriptSection.css';
import { Link } from 'react-router-dom';

const JavaScriptSection = () => {
  return (
    <div className='javascript-projects mt-5 mb-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <h2><i className="fa-brands fa-square-js"></i> JavaScript Projects</h2>
              <p>The first programming language I encountered in my career was challenging at first, but with continuous practice and hands-on projects, it gradually became easier and more enjoyable. Over time, I gained confidence, refined my skills, and turned what once felt difficult into a rewarding journey of growth and discovery.</p>
              <Link to={"/projects-page/javascript-projects"} className="btn btn-success">Show Here</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right">
              <img src="js.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JavaScriptSection;