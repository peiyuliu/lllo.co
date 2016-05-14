import { Component } from 'react'
import { Link } from 'react-router'
import { BasketButton } from '../../src/componets/homePage.js'
import { ProductItem } from '../../src/componets/productPage.js'
import WishList from '../../src/containers/wish-list'

export class WishListPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="row pageTitle">
                        <div className="col-xs-6">
                            <CartTitleOff/>
                        </div>
                        <div className="col-xs-6">
                            <WishListTitleOn/>
                        </div>
                    </div>
                </div>
                <WishList />
            </div>
        );
    }
}

class WishListTitleOn extends Component {
    render() {
        return(
            <Link to="/wishListPage" >
                <div className="row titleOn">
                    <div className="col-xs-12 text-center">
                        收藏清單
                    </div>
                </div>
            </Link>
        )
    }
}

export class CartTitleOff extends Component {
    render() {
        return (
            <Link to="/cartPage">
                <div className="row titleOff">
                    <div className="col-xs-12 text-center">
                        購物車
                    </div>
                </div>
            </Link>
        )
    }
}
