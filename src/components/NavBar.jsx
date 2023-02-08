import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  const brand = 'Verdulería online';
  const categories = [
    {
      id: 1,
      name: 'categoría 1',
    },
    {
      id: 2,
      name: 'categoría 2',
    },
    {
      id: 3,
      name: 'categoría 3',
    },
  ];

  return (
    <Navbar
      bg="light"
      expand="lg">
      <Container>
        <Navbar.Brand href="#home">{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown
              title="Categorías"
              id="categories">
              {categories.map((category) => (
                <NavDropdown.Item
                  key={category.id}
                  href="#action/3.1">
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <CartWidget amount={1337} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
