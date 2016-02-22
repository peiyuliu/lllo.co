import BasketEmpty from 'babel!svg-react!../../img/basketEmpty.svg?name=BasketEmpty'
import Basket from 'babel!svg-react!../../img/basket.svg?name=Basket'

import {Link} from 'react-router'
import {Icons} from '../../src/componets/icons.js'
import {BasketButton} from '../../src/app.js'

export const BasketPage = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="commentBox col-xs-12">
                    <div className="row">
                        <div className="col-xs-6">
                            <CartButton/>
                        </div>
                        <div className="col-xs-6">
                            <WishListsButton/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

const CartButton = React.createClass({
    getInitialState: function() {
        return {empty: true};
    },
    render: function() {
        if (this.state.empty === true) {
            return (
                <Link to="/emptyCartPage">
                    <div className="pull-left">
                        <div className="cartButton">購物車</div>
                    </div>
                </Link>
            )
        } else {
            return (
                <Link to="/cartPage">
                    <div className="pull-left">
                        <div className="cartButton">購物車</div>
                    </div>
                </Link>
            )
        }
    }
});

export const EmptyCartPage = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    Empty
                </div>
            </div>
        );
    }
});

export const CartPage = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    Product 1
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

const WishListsButton = React.createClass({
    render: function() {
        return(
            <Link to="/wishListsPage">
                <div className="pull-left">
                    <div className="wishListsButton">收藏清單</div>
                </div>
            </Link>
            )
    }
});

export const WishListsPage = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    Wish Lists
                </div>
            </div>
        );
    }
});
