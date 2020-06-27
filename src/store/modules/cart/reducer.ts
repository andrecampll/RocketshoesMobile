import { Reducer, Action, } from 'redux';
import produce from 'immer';

interface ICartAction extends Action{
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  }
}

const Cart: Reducer<any, ICartAction> = (state = [], action: ICartAction) => {
  switch(action.type) {
    case 'ADDTOCART':
      return [...state, {
        ...action.product,
        amount: 1,
      }];
    default:
      return state;
  }
};

export default Cart;
