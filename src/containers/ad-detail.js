import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, addToWishList } from '../actions/index';
import { AmountButton } from '../containers/cart-list'

class AdDetail extends Component {
    render(){
        let {activeAd, addToCart, addToWishList} = this.props
        if (!activeAd) {
            return <div>123</div>
        }
        return(
            <div className="row">
                <div className="col-xs-12 adTitle">
                    {activeAd.title}
                </div>
                <div className="col-xs-12 col-sm-6">
                    <img src={activeAd.img} className="img-responsive"/>
                </div>
                <div className="col-xs-12 col-sm-6 adInfo">
                    {activeAd.info}
                </div>
                <div className="col-xs-12 col-sm-6 adColor">
                    {activeAd.color}
                </div>
                <div className="col-xs-12 col-sm-6 adPrice">
                        NT$ {activeAd.price}
                </div>
                <div className="col-xs-6 col-sm-6">
                    <button type="button"
                            onClick={()=>addToWishList(activeAd)}
                            className="adWishBtn">＋收藏清單</button>
                </div>
                <div className="col-xs-6 col-sm-6">
                    <div className="pull-right"><AmountButton /></div>
                </div>
                <div className="col-xs-12">
                    <button type="button"
                            onClick={()=>addToCart(activeAd)}
                            className="pull-right irisBlueBtn">加入購物車</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeAd:state.activeAd
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToCart:addToCart, addToWishList:addToWishList},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdDetail);

