
var React = require("react");

var Button =React.createClass({

	getInitialState:(function(){
		 return {mouseOver:false};

	}),
	render:(function(){
		 var style =Object.assign({
		 	"border":"1px solid #f0c733",
		 	"boxShadow":"0px 1px 2px 0px rgba(0,0,0,0.2)",
		 	"padding":"5px",
		 	"backgroundColor":"#f0c733",
		 	"color":"rgba(211, 72, 69,0.8)",
		 	"borderRadius":"5px",		 	
		 	"cursor":"pointer",
		 	"width":"100%",
		 	"fontWeight":"300",
		 },this.props.style);

		 var className  = this.props.className;

		 return (

		 	<input 
		 	    style={style} 
		 	    className={className}
		 	    type='button' 
		 	    value={this.props.text}
		 	    onClick={__buttonClick.bind(this)}
		 	    onMouseEnter={__buttonMouseOver.bind(this)}
		 	    onMouseLeave={__buttonMouseLeave.bind(this)}

		 	     />

		 	);
	})


});




var __buttonClick  =(function(event){    
    if(typeof this.props.onClick =="function"){
    	 this.props.onClick(this, event);
    }
})

var __buttonMouseOver =(function(event){
	
	 if(event){
	 	 if(!this.state.mouseOver){
	 	 	 this.setState({mouseOver:true});
	 	 }
	 }
});


var __buttonMouseLeave  =(function(event){
	
	 if(event){
	 	   if(this.state.mouseOver){
	 	   	  this.setState({mouseOver:false});
	 	   }
	 }
})




module.exports  = Button;