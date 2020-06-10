import { createStore, Reducer } from 'redux';
import cart from './modules/cart/reducer';

const store = createStore(cart);

export default store;
