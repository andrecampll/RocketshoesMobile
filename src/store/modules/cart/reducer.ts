import { Reducer, Action, CombinedState } from 'redux';

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
