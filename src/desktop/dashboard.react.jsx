
var React        =require("react");
//var cssStyle     = require("")
var dtheme       = require("../master/themes/standard.theme.jsx");

var Login     = require("./index.react.jsx");



var DashBoard =  React.createClass({

	 render:(function(){
      var theme  = Object.assign(dtheme, this.props.theme);

	 	var style =Object.assign({
	 		"backgroundColor":theme.colors.windowBackground, 
	 		"margin":"0px",
	 		"padding":"0px",
	 		"width":"100%",
	 		"overflow":"auto",
	 		"boxSizing": "border-box",
	 		"position":"fixed",
	 		"height":"100%",
	 		
	 	},this.props.style);

	 	return(
	 	<div style={style}>
	 		  <Login />
          
  
	 	</div>)
	 })
});



module.exports=  DashBoard;