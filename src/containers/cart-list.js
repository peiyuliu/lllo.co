import { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromCart } from '../actions/index';
import { addToWishList } from '../actions/index';

class CartList extends Component {
    renderList() {
        return this.props.cart.map((ad, index)=>{
            return(
                <div className="row" key={index}>
                    <div className="col-xs-5">
                        <img src={ad.img} className="img-responsive"/>
                    </div>
                    <div className="col-xs-7">
                        <div className="row">
                            <div className="col-xs-12 cartProductTitle">
                                {ad.title}
                            </div>
                            <div className="col-xs-8 cartProductColor">
                                {ad.color}
                            </div>
                            <div className="col-xs-4">
                                <button type="button" onClick={()=>this.props.removeFromCart(ad)}>
                                    <img src="../../img/trash.svg"/>
                                </button>
                            </div>
                            <div className="col-xs-8 cartWishButtonOutside">
                                <button type="button" className="cartWishButton" onClick={()=>{
                                            this.props.addToWishList(ad)
                                            this.props.removeFromCart(ad)
                                            }}>＋收藏清單</button>
                            </div>
                            <div className="col-xs-12">
                                <AmountButton />
                            </div>
                            <div className="col-xs-12 cartProductPrice">
                                NT$ {ad.price}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        if (this.props.cart.length === 0) {
            return <div>購物車是空的</div>
        }
        return(
            <div className="col-xs-12 cartProductBox">
                {this.renderList()}
            </div>
        )
    }
}

export class AmountButton extends Component {
    constructor() {
        super();
        this.state = { productAmount: 1 };
        this.minusOnClick = this.minusOnClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.plusOnClick = this.plusOnClick.bind(this)
    }
    handleChange(event) {
        this.setState({ productAmount: event.target.value });
    }
    minusOnClick(){
        let originalAmount = this.state.productAmount
        this.setState({ productAmount:  originalAmount-1});
    }
    plusOnClick(){
        let originalAmount = this.state.productAmount
        this.setState({ productAmount:  originalAmount+1});
    }
    render() {
        return (
            <div className="amountButton">
                <button className="text-center minus" onClick={this.minusOnClick}>-</button>
                <input
                    type="number"
                    className="text-center amountInput"
                    value={this.state.productAmount}
                    onChange={this.handleChange} />
                <button className="text-center plus" onClick={this.plusOnClick}>+</button>
            </div>

        )
    }
}


function mapStateToProps(state){
    return{
        cart:state.cart
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToWishList:addToWishList, removeFromCart:removeFromCart},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
