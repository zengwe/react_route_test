import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import style from "./entry.css";
// router路由引用的组件
// import MsgListPage from "../../component/MsgListPage/MsgListPage";
// import MsgDetailPage from "../../component/MsgDetailPage/MsgDetailPage";
// import MsgCreatePage from "../../component/MsgCreatePage/MsgCreatePage";
// import MenuPage from "../../component/MenuPage/MenuPage";
var name="zengwsdddddddddddssddssddddddddfadsfadsddddddddddsss";
var FirstPage=React.createClass({
	getInitialState() {
	    return {
	        animate:"page FirstPage pageIn"
	    };
	},
	componentWillUnmount:function(){
		this.setState({
			animate:"page FirstPage pageout"
		});
	},
	render:function(){
		console.log(this.props);
		return (
			<div className={this.state.animate}>firstpage</div>
		);
	}
});
var SecondPage=React.createClass({
	getInitialState() {
	    return {
	        animate:"page SecondPage pageIn"
	    };
	},
	componentWillUnmount:function(){
		console.log('sss');
		this.setState({
			animate:"page SecondPage pageout"
		});
	},	
	render:function(){
		console.log(this.props);
		return (
			<div className={this.state.animate}>secondpage</div>
		);
	}
});
var Index=React.createClass({
	render:function(){
		console.log(this.props);
		return (
			<div className="indexpage">index</div>
		);
	}
});
var Container=React.createClass({
	componentDidMount:function(){
		$(".main").click(function(){

		});
		$(".about").click(function(){

		});
		$(".index").click(function(){

		});
	},
	render:function(){
		return (
          <ReactCSSTransitionGroup
                transitionName="transitionWrapper"
                component="div"
                className="containerstyle"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                >
                <div key={this.props.location.pathname}
                     >
                    {
                        this.props.children
                    }
                </div>
            </ReactCSSTransitionGroup>
		);
	}
});
ReactDOM.render( 
	<Router history={hashHistory}>
		<Route path="/" component={Container}>
			<IndexRoute component={Index}/>
			<Route path="main" component={FirstPage}/>
			<Route path="about" component={SecondPage}/>
		</Route>
	</Router>
, document.getElementById('reactRoot')
);