import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { selectProduct } from '../actions/index';
import { bindActionCreators } from 'redux';
import { ProductDetailPage } from '../../src/componets/productPage'

class AllProductList extends Component {
    renderList() {
        return this.props.products.map((product)=>{
            return(
                <div key={product.title} onClick={()=>this.props.selectProduct(product)} className="col-xs-12 col-sm-6 ">
                    <Link to="/productDetailPage">
                        <div>
                            <img src={product.img} className="img-responsive "/>
                        </div>
                        <div>
                            {product.title}
                        </div>
                        <div>
                            NT$ {product.price}
                        </div>
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
        products: state.products
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectProduct:selectProduct},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AllProductList);



