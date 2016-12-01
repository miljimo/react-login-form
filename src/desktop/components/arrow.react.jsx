var React = require("react");
var dtheme     = require("../../master/themes/standard.theme.jsx");


var Arrow = React.createClass({

	 render:(function(){

	 	 var theme  = Object.assign(dtheme, this.props.theme);
	 	 var style =Object.assign({
	 	 	width:"0px",
	 	 	"height":"0px",	 	 	
	 	 	"margin":"0px auto 0px auto",
	 	 	"borderLeft":"10px solid transparent",
	 	 	"borderTop":"7px solid transparent",
	 	 	"borderRight":"10px solid transparent",
	 	 	"borderBottom":"7px solid "+theme.colors.primaryLight,
	 	 }, this.props.style);
	 	 
	 	return (<div onClick={__onClick.bind(this)} className={this.props.className} style={style} />)
	 })
})



var __onClick =(function(event){
	 if(typeof this.props.onClick=='function'){
	 	 this.props.onClick(event);
	 }
})

module.exports = Arrow;