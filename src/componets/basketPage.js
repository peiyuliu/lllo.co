
import { Component } from 'react'
import { Link } from 'react-router'
import { BasketButton } from '../../src/componets/homePage.js'

export class BasketPage extends Component {
    constructor() {
        super();
        this.state = { empty: true };
    }
    render() {
        if (this.state.empty === true) {
            return (
                <div className="row">
                    <div className="col-xs-12 pageTitle">
                        <div className="row">
                            <div className="col-xs-6">
                                <CartButtonY/>
                            </div>
                            <div className="col-xs-6">
                                <WishListsButtonN/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <EmptyCartPage />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <div className="pageTitle col-xs-12">
                        <div className="row">
                            <div className="col-xs-6">
                                <CartButtonY/>
                            </div>
                            <div className="col-xs-6">
                                <WishListsButtonN/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <CartPage />
                    </div>
                </div>
            )
        }
    }
}

export class WishListsPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="pageTitle col-xs-12">
                    <div className="row">
                        <div className="col-xs-6">
                            <CartButtonN/>
                        </div>
                        <div className="col-xs-6">
                            <WishListsButtonY/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export class CartButtonY extends Component {
    render() {
        return (
            <Link to="/basketPage">
                <div className="row">
                    <div className="buttonY col-xs-12 text-center">
                        Cart
                    </div>
                </div>
            </Link>
        )
    }
}

export class CartButtonN extends Component {
    render() {
        return (
            <Link to="/basketPage">
                <div className="row">
                    <div className="buttonN col-xs-12 text-center">
                        Cart
                    </div>
                </div>
            </Link>
        )
    }
}

export class EmptyCartPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    Empty
                </div>
            </div>
        );
    }
}

export class CartPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class WishListsButtonY extends Component {
    render() {
        return(
            <Link to="/wishListsPage" >
                <div className="row">
                    <div className="buttonY col-xs-12 text-center">
                        Wish Lists
                    </div>
                </div>
            </Link>
        )
    }
}

class WishListsButtonN extends Component {
    render() {
        return(
            <Link to="/wishListsPage" >
                <div className="row">
                    <div className="buttonN col-xs-12 text-center">
                        Wish Lists
                    </div>
                </div>
            </Link>
        )
    }
}


