import { combineReducers } from 'redux';
import AdReducer from './reducer_ads';
import ActiveAd from './reducer_active_ads'
import CartReducer from './reducer_cart'
import WishListReducer from './reducer_wishList'
import ProductReducer from './reducer_products'
import ActiveProduct from './reducer_active_products'

const rootReducer = combineReducers({
   ads: AdReducer,
   activeAd: ActiveAd,
   cart: CartReducer,
   wishList: WishListReducer,
   products: ProductReducer,
   activeProduct: ActiveProduct
});

export default rootReducer;