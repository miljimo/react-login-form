var React = require("react");
var Path  = require("path");



var Image  = React.createClass({

	 render:(function(){

	 	 var style =Object.assign({
              width:"50px",
             "height":"50px",
             "borderRadius":"100%",
             "border":"0px solid #eee",
             "margin":"10px auto auto auto",
             "position":"relative",
             "display":"block",
             "boxShadow":"0px 1px 1px 0px rgba(0,0,0,0.2)",
             
	 	 }, this.props.style);



	 	  return (<img  className={this.props.className} style={style}  src={Path.resolve(this.props.src)} />)
	 })
})



module.exports = Image;