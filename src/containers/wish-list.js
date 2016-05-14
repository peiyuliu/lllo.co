import { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, removeFromWishList } from '../actions/index';

class WishList extends Component {
    renderList() {
        return this.props.wishList.map((ad, index)=>{
            return(
                <div className="col-xs-12 col-lg-6 productList" key={index}>
                    <div className="col-xs-5">
                        <img src={ad.img} className="img-responsive"/>
                    </div>
                    <div className="col-xs-5">
                        <div className="row">
                            <div className="col-xs-12 productTitle">
                                {ad.title}
                            </div>
                            <div className="col-xs-12 productInfo">
                                {ad.info}
                            </div>
                            <div className="col-xs-12">
                                <AmountButton />
                            </div>
                            <div className="col-xs-12 productPrice">
                                NT${ad.price}
                            </div>
                            <div className="col-xs-12 cartWishButton">
                                <button type="button" onClick={()=> {
                                    this.props.addToCart(ad)
                                    this.props.removeFromWishList(ad)
                                }}>＋購物車</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-2">
                        <button type="button" onClick={()=>this.props.removeFromWishList(ad)}>
                            <img src="../../img/trash.svg"/>
                        </button>
                    </div>
                </div>
            )
        })
    }

    render() {
        if (this.props.wishList.length === 0) {
            return <div>收藏清單是空的</div>
        }
        return(
            <div>
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
        wishList:state.wishList
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToCart:addToCart, removeFromWishList:removeFromWishList},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);