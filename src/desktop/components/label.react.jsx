var React =require("react");
var dtheme     = require("../../master/themes/standard.theme.jsx");



var Label = React.createClass({

	 render:(function(){
	 	  var theme = Object.assign(dtheme, this.props.theme);
	 	  var style=Object.assign({
	 	  	"backgroundColor":"transparent",
	 	  	"color":theme.colors.accent,
	 	  	"display":(this.props.children)?"block":"none",
	 	  	"position":"relative",
	 	  	"width":"100%",

	 	  }, this.props.style);

	 	  return (<label  style ={style}> {this.props.children ||  ""}</label>);

	 })
});



module.exports =Label;