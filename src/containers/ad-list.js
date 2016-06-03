import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { selectAd } from '../actions/index';
import { bindActionCreators } from 'redux';
import { AdDetailPage } from '../../src/componets/advertisementPage'

class AdList extends Component {
    renderList() {
        return this.props.ads.map((ad)=>{
            return(
                <div key={ad.img} onClick={()=>this.props.selectAd(ad)} className="col-xs-12 col-sm-6 adList">
                    <Link to="/adDetailPage">
                        <img src={ad.img} className="img-responsive"/>
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



