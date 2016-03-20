import { Component } from 'react'
import { Link } from 'react-router'
import { BasketButton } from '../../src/componets/homePage.js'
import { ProductItem } from '../../src/componets/productPage.js'

export class BasketPage extends Component {
    constructor() {
        super();
        this.state = { empty: true };
    }
    render() {
        if (this.state.empty === true) {
            return (
                <div className="row">
                    <div className="col-xs-12">
                        <div className="row pageTitle">
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
                    <div className="col-xs-12">
                        <div className="row pageTitle">
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
    constructor() {
        super();
        this.productList = [
            {
                id: 0,
                img: '../../img/shoe.jpg' ,
                title: 'shoes',
                info: 'red',
                price: '100'
            },
            {
                id: 1,
                img: '../../img/shoe.jpg',
                title: 'pen',
                info: 'green',
                price: '200'
            }
        ]
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="row pageTitle">
                        <div className="col-xs-6">
                            <CartButtonN/>
                        </div>
                        <div className="col-xs-6">
                            <WishListsButtonY/>
                        </div>
                    </div>
                </div>
                {this.productList.map((productInput) => {
                    return (
                        <div className="col-xs-12 col-sm-6" key={productInput.id}>
                            <ProductItem product={productInput}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export class CartButtonY extends Component {
    render() {
        return (
            <Link to="/basketPage">
                <div className="row buttonY">
                    <div className="col-xs-12 text-center">
                        購物車
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
                <div className="row buttonN">
                    <div className="col-xs-12 text-center">
                        購物車
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
                    購物車 空空滴
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
                <div className="row buttonY">
                    <div className="col-xs-12 text-center">
                        收藏清單
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
                <div className="row buttonN">
                    <div className="col-xs-12 text-center">
                        收藏清單
                    </div>
                </div>
            </Link>
        )
    }
}


