import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdList extends Component {
    renderList () {
        return this.props.ads.map((ad)=>{
            return(
                <li key={ad.title}>{ad.title}</li>
            );
        });
    }
    render(){
        return(
            <ul className="col-sm-4">{this.renderList()}</ul>
        )
    }
}

function mapStateToProps(state){
    return{
        ads: state.ads
    };
}

export default connect(mapStateToProps)(AdList);



