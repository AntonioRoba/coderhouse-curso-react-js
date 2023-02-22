import { Badge } from 'react-bootstrap';
import { dimensions } from '../css_classes/dimensions';
import { pointer } from '../css_classes/pointer';

import emptyCart from './../assets/icons/shopping_carts/empty.png';
import fullCart from './../assets/icons/shopping_carts/full.png';

export const CartWidget = ({ amount }) => {
  const clickHandler = () => alert("Todavía no está implementao', jeje :)");

  return (
    <div onClick={clickHandler}>
      <Badge style={pointer}>
        <img
          style={{ ...dimensions(24, 24) }}
          className="m-auto p-0"
          src={amount === 0 ? emptyCart : fullCart}
          alt="Carrito"
        />
        <p>{amount}</p>
      </Badge>
    </div>
  );
};
