import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { getCartService } from '../services/getCart';
import { setCartService } from '../services/setCart';

export const AddToCart = ({ id, name, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const [itemInCart, setItemInCart] = useState(undefined);

  useEffect(() => {
    getCart();
  }, [id]);

  useEffect(() => {
    if (itemInCart && itemInCart.quantity) setQuantity(itemInCart.quantity);
  }, [itemInCart]);

  const getCart = () => {
    const cart = getCartService();
    const existInCart = cart.items.find((item) => item.id === id);

    setItemInCart(existInCart);
  };

  const subQuantity = () => setQuantity(quantity - 1);
  const addQuantity = () => setQuantity(quantity + 1);
  const addToCart = () => {
    let action = 'agregar';
    let _quantity = quantity;
    if (itemInCart && itemInCart.quantity > quantity) {
      action = 'quitar';
      _quantity = itemInCart.quantity - quantity;
    } else if (itemInCart && itemInCart.quantity < quantity)
      _quantity = quantity - itemInCart.quantity;

    const text = `¿Seguro que quiere ${action} ${_quantity} ${name} al carrito?`;

    if (confirm(text)) {
      const item = { id, quantity };
      setCartService(item);
      setItemInCart({ id, quantity });
    } else alert("Qué güeno, todavía no está el coso pa'gregar, jeje.");
  };

  return (
    <div>
      <div className="col-2">
        <div className="row">
          <ButtonGroup aria-label="Agregar o quitar cantidad">
            <Button
              variant="danger"
              size="s"
              disabled={quantity === 0}
              title="Disminuir cantidad a agregar"
              onClick={subQuantity}>
              -
            </Button>
            <Button
              variant="light"
              title="Cantidad a agregar">
              {quantity}
            </Button>
            <Button
              variant="primary"
              size="s"
              disabled={quantity === stock}
              title="Sumar cantidad a agregar"
              onClick={addQuantity}>
              +
            </Button>
          </ButtonGroup>
        </div>
        <div className="row">
          <Button
            onClick={addToCart}
            disabled={
              quantity === 0 || (itemInCart && quantity == itemInCart.quantity)
            }
            size="s">
            {stock === 0
              ? 'No quedan en stock :c'
              : quantity !== 0
              ? 'Agregar :)'
              : 'Seleccione una cantidad'}
          </Button>
        </div>
      </div>
    </div>
  );
};
