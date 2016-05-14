import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { selectAd } from '../actions/index';
import { bindActionCreators } from 'redux';
import { ProductPage } from '../../src/componets/productPage'

class AdList extends Component {
    renderList() {
        return this.props.ads.map((ad)=>{
            return(
                <div key={ad.img} onClick={()=>this.props.selectAd(ad)}>
                    <Link to="/productPage" className="col-xs-12 col-sm-6">
                        <img src={ad.img} className="img-responsive adList"/>
                    </Link>
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        ads: state.ads
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectAd:selectAd},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AdList);



