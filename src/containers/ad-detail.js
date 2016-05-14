import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, addToWishList } from '../actions/index';

class AdDetail extends Component {
    render(){
        let {activeAd, addToCart, addToWishList} = this.props
        if (!activeAd) {
            return <div>123</div>
        }
        return(
            <div className="col-sm-8">
                <div><img src={activeAd.img} className="img-responsive"/></div>
                <div>{activeAd.title}</div>
                <div>{activeAd.color}</div>
                <div>{activeAd.price}</div>
                <button type="button" onClick={()=>addToCart(activeAd)}>＋購物車</button>
                <button type="button" onClick={()=>addToWishList(activeAd)}>＋收藏清單</button>
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

