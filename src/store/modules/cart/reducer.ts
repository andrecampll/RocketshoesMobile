import { Reducer, Action, } from 'redux';
import produce from 'immer';

interface ICartAction extends Action{
  id ?: number;
  amount : number;
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  }
}

const Cart: Reducer<any, ICartAction> = (state = [], action: ICartAction) => {
  switch(action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft: any[]) => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, (draft: any[]) => {
        const productIndex = draft.findIndex(product => product.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT':{
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, (draft: any[]) => {
        const productIndex = draft.findIndex(product => product.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
};

export default Cart;
