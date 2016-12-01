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

	 	  return (<label  onClick={__onClick.bind(this)}
	 	                  style ={style}
	 	                   onMouseEnter={__onMouseOver.bind(this)}
	 	                  onMouseLeave={__onMouseLeave.bind(this)}>
	 	                   {this.props.children ||  ""}
	 	                 
	 	                  </label>);

	 })
});



var __onClick =(function(event){


	if(this.props.onClick){
		 this.props.onClick(event);
	}

});

var __onMouseOver =(function(event){
	 if(this.props.onMouseEnter){
	 	 this.props.onMouseEnter(event);
	 }
})


var __onMouseLeave =(function(event){
	 if(this.props.onMouseLeave){
	 	 this.props.onMouseLeave(event);
	 }
})

module.exports =Label;