import BasketEmpty from 'babel!svg-react!../../img/basketEmpty.svg?name=BasketEmpty'
import Basket from 'babel!svg-react!../../img/basket.svg?name=Basket'

import {Link} from 'react-router'
import {Icons} from '../../src/componets/icons.js'

export const BasketButton = React.createClass({
    getInitialState: function() {
        return {empty: true};
    },
    render: function() {
        if (this.state.empty === true) {
            return (
                <Link to="/emptyCartPage">
                    <div className="pull-left">
                        <Icons icon="cartAdd" size="25px" fill="#00BCD4" />
                    </div>
                </Link>
            )
        } else {
            return (
                <Link to="/cartPage">
                    <div className="pull-left">
                        <Icons icon="cartFull" size="25px" fill="#00BCD4" />
                    </div>
                </Link>
            )
        }
    }
});

export const EmptyCartPage = React.createClass({
    render: function() {
        return (
            <div className="commentBox row">
                <div className="basketName center-block">
                    購物車 empty
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export const CartPage = React.createClass({
    render: function() {
        return (
            <div className="commentBox row">
                <div className="basketName center-block">
                    購物車
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
});
