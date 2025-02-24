import "./StaticProjectsSection.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StaticProjectsSection = () => {
  return (
    <div className="static-projects mt-5 mb-5">
      <h1 className="text-center">
        <i className="fa-solid fa-code"></i> My All Projects
      </h1>
      <div className="container">
        <div className="row">
          <motion.div
            className="col-lg-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="left">
              <h2>
                <i className="fa-brands fa-html5"></i> Static Projects
              </h2>
              <p>
                Welcome to the beginning of my journey! This is a collection of
                all my static projects built with HTML & CSS. It was an amazing
                experience where I learned about design, page structure, and
                styling. Playing with styles allowed me to achieve beautiful
                designs. I will continue to improve and make my skills even
                stronger!
              </p>
              <Link
                to={"/projects-page/static-projects"}
                className="btn btn-success"
              >
                Show Here
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="right">
              <img src="html&css.png" className="img-fluid" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StaticProjectsSection;
