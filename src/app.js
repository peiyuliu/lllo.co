//CSS

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/css/index.css"
import BasketEmpty from 'babel!svg-react!../img/basketEmpty.svg?name=BasketEmpty'
import Basket from 'babel!svg-react!../img/basket.svg?name=Basket'

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox row">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                    <TitleBar />
                </div>
                <div className="col-xs-12">
                    <FrontPage />
                </div>
                <div className="col-xs-12">
                    <CommentList data={this.props.data} />
                    <InputTest />
                    <Test />
                </div>
            </div>
        );
    }
});

var TitleBar = React.createClass({
    render: function(){
        return (
            <div className="row titleBar">
                <div className="col-xs-2 col-md-2">
                    <BasketButton />
                </div>
                <div className="col-xs-8 col-md-8">
                    <img id="llloco" src="img/llloco.svg" className="img-responsive center-block"/>
                </div>
                <div className="col-xs-2 col-md-2">
                    <AccountButton />
                    <test />
                </div>
            </div>
        )
    }
});

var FrontPage = React.createClass({
   render: function() {
       return (
           <div className="row">
               <div className="searchTitle col-xs-12 text-center">
                   <h4>在地人幫你買</h4>
               </div>
               <div className="col-xs-12">
                   <img id="searchButton" src="img/searchButton.svg" className="img-responsive center-block"/>
               </div>
           </div>


       )
   }
});

var InputTest = React.createClass({
    getInitialState: function() {
        return {value: 'Hello!'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        var value = this.state.value;
        return <input className="inputTest" type="text" value={value} onChange={this.handleChange} />;
    }
});

var Test = React.createClass({
    render: function() {
        return(
            <div className="row">
                <div className="col-xs-12">
                    <textarea name="description" value="This is a description." />
                </div>
                <div className="col-xs-12">
                    <select value="B" className="center-block">
                        <option value="A">Apple</option>
                        <option value="B">Banana</option>
                        <option value="C">Cranberry</option>
                    </select>
                </div>
            </div>
        )
    }
});

var BasketButton = React.createClass({
    getInitialState: function() {
        return {liked: true};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        if (this.state.liked === true) {
            return <BasketEmpty onClick={this.handleClick} />
        } else {
            return <Basket onClick={this.handleClick} />
        }
    }
});

var AccountButton = React.createClass({
    getInitialState: function() {
        return {liked: true};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? 'accountOut.svg' : 'accountIn.svg';
        return (
            <img id="account" onClick={this.handleClick} src={'img/'+text} className="img-responsive pull-right"/>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var Mapfunction =  this.props.data.map(function(d){
            return (
                <Comment subtitle={d.subtitle} text={d.text} />
            )
        });
        return (
            <div className="row">
                {Mapfunction}
            </div>
        )
    }
});

var Comment = React.createClass({
    render: function() {
        return(
            <div className="col-xs-6">
                <h4>{this.props.subtitle}</h4>
                <h5>{this.props.text}</h5>
            </div>
        )
    }
});



var data = [
    {subtitle: "Summary", text: "Hello"},
    {subtitle: "Work Experience", text: "PEGA"},
];

ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);
