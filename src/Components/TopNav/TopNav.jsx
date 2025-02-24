import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";

const TopNav = () => {

  // Component States
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "lightMode");

  const changeTheme = () => {
    const newTheme = theme === "lightMode" ? "darkMode" : "lightMode";
    document.body.classList.toggle("darkMode");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    document.body.classList.add(theme);
  });

  return (
    <div className="top-nav">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Front-End-Show-Cases</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/" style={{ fontWeight: "bold" }}><i class="fa-solid fa-house"></i> Home</NavLink>
              <NavDropdown title="Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/projects-page/static-projects">
                  <i className="fa-brands fa-html5"></i> Static Projects
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/projects-page/javascript-projects">
                  <i className="fa-brands fa-square-js"></i> Javascript Projects
                </NavDropdown.Item>
              </NavDropdown>
              <a target="_blank" className="nav-link" href="https://my-portfolio-kohl-seven-11.vercel.app/">
                <i className="fa-solid fa-user"></i> Portfolio
              </a>
              <Nav.Link onClick={()=> changeTheme()}>
                {theme === "darkMode" ? (<i class="fa-solid fa-sun"></i>) : (<i class="fa-solid fa-moon"></i>)}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;