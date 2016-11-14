
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

	 		drawer:{
	 			 width:"25%",
	 			"margin":"0px",
	 			"padding":"0px 0px 0px 1px",
	 			"borderRight":"1px solid "+theme.colors.primaryDark,
	 			"backgroundColor":theme.colors.primary,
	 			"height":"100%",
	 			"boxSizing": "border-box",
	 			"color":theme.colors.primaryLight,
	 			"fontWeight":"100",
	 			 position:"fixed",
	 			 "zIndex":1,
	 			 "left":"0%",
	 		},
	 		"page":{
                 width:"75%",
	 			"margin":"0px",
	 			"padding":"0px 0px 0px 1px",
	 			"border":"0px solid #000",
	 			"backgroundColor":theme.colors.windowBackground,
	 			"minHeight":"300px",
	 			"boxSizing": "border-box",
	 			"height":"100%",
	 			"position":"relative",
	 			"zIndex":0,
	 			"left":"25%",
	 			"margin":"0px  0px 0px 0px",
	 			"overflow":"scroll",
	 		}
	 		
	 	},this.props.style);

	 	return(
	 	<div style={style}>
	 		
            <div style={style.drawer}>
             ...

            </div>


            <div style={style.page}>
              <Login />
            </div>

 
	 	</div>)
	 })
});



module.exports=  DashBoard;