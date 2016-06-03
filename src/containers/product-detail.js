
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, addToWishList } from '../actions/index';
import { AmountButton } from '../containers/cart-list'

class ProductDetail extends Component {
    render(){
        let {activeProduct, addToCart, addToWishList} = this.props
        if (!activeProduct) {
            return <div>123</div>
        }
        return(
            <div className="row">
                <div className="col-xs-12 adTitle">
                    {activeProduct.title}
                </div>
                <div className="col-xs-12 col-sm-6">
                    <img src={activeProduct.img} className="img-responsive"/>
                </div>
                <div className="col-xs-12 col-sm-6 adInfo">
                    {activeProduct.info}
                </div>
                <div className="col-xs-12 col-sm-6 adColor">
                    {activeProduct.color}
                </div>
                <div className="col-xs-12 col-sm-6 adPrice">
                    NT$ {activeProduct.price}
                </div>
                <div className="col-xs-6 col-sm-6">
                    <button type="button"
                            onClick={()=>addToWishList(activeProduct)}
                            className="adWishBtn">＋收藏清單</button>
                </div>
                <div className="col-xs-6 col-sm-6">
                    <div className="pull-right"><AmountButton /></div>
                </div>
                <div className="col-xs-12">
                    <button type="button"
                            onClick={()=>addToCart(activeProduct)}
                            className="pull-right irisBlueBtn">加入購物車</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeProduct:state.activeProduct
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToCart:addToCart, addToWishList:addToWishList},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

