import { combineReducers } from 'redux';
import AdReducer from './reducer_ads';
import ActiveAd from './reducer_active_ads'
import CartReducer from './reducer_cart'
import WishListReducer from './reducer_wishList'

const rootReducer = combineReducers({
   ads: AdReducer,
   activeAd: ActiveAd,
   cart: CartReducer,
   wishList: WishListReducer,
});

export default rootReducer;