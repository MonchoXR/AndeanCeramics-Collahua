import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import Milogo from '../../Assets/Logo/AndeanCeramics400x80.png';
import CartWidget from '../CartWidget/CartWidget';



function MiNav(){
    return (
      <header >
        <Navbar className='navbar_container'  bg="light" expand="lg">
          <Container >
            <Navbar.Brand href="#home">
            <img 
            //   src="/Assets/Logo/AndeanCeramics400x80.png"
                src={Milogo}
            //   width="30"
            //   height="30"
              className=" navbar_img d-inline-block align-top "
              alt="AndeanCeramics logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

              <Nav  variant="tabs" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                  <CartWidget></CartWidget>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      

        
      </header>
    );
}

export default MiNav;