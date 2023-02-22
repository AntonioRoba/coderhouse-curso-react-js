import { getCartService } from './getCart';

export const setCartService = (item) => {
  const cart = getCartService();
  if (!cart.items) cart.items = [];

  const exist = cart.items.find((_item) => _item.id == item.id);
  if (typeof exist === 'undefined') cart.items.push(item);
  else
    cart.items = cart.items.map((_item) => {
      if (_item.id === item.id) _item.quantity = item.quantity;

      return _item;
    });

  cart.quantity = cart.items.reduce(
    (accumulator, { quantity }) => (accumulator += quantity),
    0
  );

  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(getCartService());
};
