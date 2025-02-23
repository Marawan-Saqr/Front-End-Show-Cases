import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top-nav">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Front-End-Show-Cases</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Link to={"/"} className="nav-link">
                <i className="fa-solid fa-house"></i> Home
              </Link>
              <NavDropdown title="Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/projects-page/static-projects">
                  <i className="fa-brands fa-html5"></i> Static Projects
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/javascript-projects">
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
              <Link to="/portfolio" className="nav-link">
                <i className="fa-solid fa-user"></i> Portfolio
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
