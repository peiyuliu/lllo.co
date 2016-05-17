import { Component } from 'react'
import { Link } from 'react-router'
import CartList from '../../src/containers/cart-list'

export class CartPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="row pageTitle">
                        <div className="col-xs-6">
                            <CartTitleOn/>
                        </div>
                        <div className="col-xs-6">
                            <WishListTitleOff/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 cartList">
                    <CartList />
                </div>
                <div className="col-xs-12">
                    <CartPriceBox />
                </div>
                <div className="col-xs-12 btnAround">
                    <button type="button" className="irisBlueBtn pull-right">結帳</button>
                </div>
            </div>
        );
    }
}


class CartPriceBox extends Component {
    render() {
        return(
            <div className="row cartPriceBox">
                <div className="col-xs-12">
                    <div className="row allPrice">
                        <div className="col-xs-6">小計</div>
                        <div className="col-xs-6">
                            <div className="pull-right">
                                NT$  小計
                            </div>
                        </div>
                        <div className="col-xs-6">代買費</div>
                        <div className="col-xs-6">
                            <div className="pull-right">
                                NT$  代買費
                            </div>
                        </div>
                        <div className="col-xs-6">國際運費</div>
                        <div className="col-xs-6">
                            <div className="pull-right">
                                NT$  國際運費
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="row totalPrice">
                        <div className="col-xs-6">合計</div>
                        <div className="col-xs-6">
                            <div className="pull-right">
                                NT$  合計
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CartTitleOn extends Component {
    render() {
        return (
            <Link to="/cartPage">
                <div className="row titleOn">
                    <div className="col-xs-12 text-center">
                        購物車
                    </div>
                </div>
            </Link>
        )
    }
}

class WishListTitleOff extends Component {
    render() {
        return(
            <Link to="/wishListPage" >
                <div className="row titleOff">
                    <div className="col-xs-12 text-center">
                        收藏清單
                    </div>
                </div>
            </Link>
        )
    }
}