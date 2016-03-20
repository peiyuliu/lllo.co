import { Component } from 'react'
import { Link } from 'react-router'

export class ProductPage extends Component {
    render(){
        return(
            <div className="row">I'm Product!</div>
            )
    }
}

export class ProductItem extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-xs-5">
                    <img src={this.props.product.img} className="img-responsive"/>
                </div>
                <div className="col-xs-5">
                    <div className="row">
                        <div className="col-xs-12 productTitle">
                            {this.props.product.title}
                        </div>
                        <div className="col-xs-12 productInfo">
                            {this.props.product.info}
                        </div>
                        <div className="col-xs-12">
                            <AmountButton />
                        </div>
                        <div className="col-xs-6 productPrice pull-right">
                            NT${this.props.product.price}
                        </div>
                        <div className="col-xs-12 cartWishButton">
                            <h6>＋移至收藏清單</h6>
                        </div>
                    </div>
                </div>
                <div className="col-xs-2">
                    <img src="../../img/trash.svg"/>
                </div>
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