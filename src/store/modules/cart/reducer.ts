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
      return produce(state, (draft: any[]) => {
        const productIndex = draft.findIndex(product => product.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });
    default:
      return state;
  }
};

export default Cart;
