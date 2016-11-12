var React = require("react");



var Arrow = React.createClass({

	 render:(function(){

	 	 var style =Object.assign({
	 	 	width:"0px",
	 	 	"height":"0px",	 	 	
	 	 	"margin":"0px auto 0px auto",
	 	 	"borderLeft":"10px solid transparent",
	 	 	"borderTop":"7px solid transparent",
	 	 	"borderRight":"10px solid transparent",
	 	 	"borderBottom":"7px solid rgba(210, 72, 70,1)",

	 	 }, this.props.style);
	 	 
	 	return (<div  className={this.props.className} style={style} />)
	 })
})


module.exports = Arrow;