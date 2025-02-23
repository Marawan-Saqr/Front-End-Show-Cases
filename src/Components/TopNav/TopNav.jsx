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
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/angular-projects">
                  <i className="fa-brands fa-angular"></i> Angular Projects
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/react-projects">
                  <i className="fa-brands fa-react"></i> React Projects
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/cpp-projects">
                  <i className="fa-solid fa-c"></i> C++ Projects
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/oop-projects">
                  <i className="fa-solid fa-diagram-project"></i> OOP Projects
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/portfolio" className="nav-link">
                <i className="fa-solid fa-user"></i> Portfolio
              </NavLink>
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
