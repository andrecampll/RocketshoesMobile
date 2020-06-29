interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function addToCartRequest(id: number) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product: Product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id: number) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id: number, amount: number) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id: number, amount: number) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}