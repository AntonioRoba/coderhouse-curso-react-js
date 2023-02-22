import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getCartService } from '../services/getCart';
import { getCategoriesService } from '../services/getCategories';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  const brand = 'Verdulería online';
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    getCategories();
    const cart = getCartService();
    setCartQuantity(cart.quantity);
  }, [params]);

  const getCategories = async () => {
    const _categories = await getCategoriesService();
    setCategories(_categories);
  };

  return (
    <Navbar
      bg="light"
      expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>{brand}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Categorías"
              id="categories">
              {categories.length === 0
                ? 'cargando'
                : categories.map(({ id, name }) => (
                    <NavDropdown.Item
                      as={Link}
                      key={id}
                      to={`/category/${name}`}>
                      {name}
                    </NavDropdown.Item>
                  ))}
            </NavDropdown>
          </Nav>
          <CartWidget amount={cartQuantity} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
