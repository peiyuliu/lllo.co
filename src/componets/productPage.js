import { Component } from 'react'
import { Link } from 'react-router'
import AllProductList from '../containers/all-product-list'
import ProductDetail from '../containers/product-detail'

export class AllProductPage extends Component {
    render(){
        return(
            <AllProductList />
            )
    }
}

export class ProductDetailPage extends Component{
    render(){
        return(
            <ProductDetail />
        )
    }
}