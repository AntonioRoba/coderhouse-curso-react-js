export const getCartService = () => {
  const cart = localStorage.getItem('cart');
  return JSON.parse(cart === null ? '{"quantity": 0, "items": []}' : cart);
};
