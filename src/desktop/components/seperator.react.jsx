var React =require("react");
var dtheme     = require("../../master/themes/standard.theme.jsx");


var Seperator =React.createClass({
	render:(function(){
	var theme  = Object.assign(dtheme, this.props.theme)
	var style=Object.assign({
      	"border":"1px solid "+theme.colors.divider,
      	"width":"100%",   	  
      },this.props.style)
	return(
            <hr className={'seperator '+(this.props.className)?this.props.className:""}  style={style}/>
		)
	})
});



module.exports= Seperator;