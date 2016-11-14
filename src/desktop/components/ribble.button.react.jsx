
var React = require("react");
var dtheme     = require("../../master/themes/standard.theme.jsx");
var Image  = require("./image.react.jsx");
var Label  = require("./label.react.jsx")


var RibbleButton =React.createClass({

	getInitialState:(function(){
		 return {hover:false};

	}),
	render:(function(){

		var theme  = Object.assign(dtheme, this.props.theme );

		 var style =Object.assign({
		    ribble:{
	 	  	 	 margin:"5px auto",
	 	  	 	"borderRadius":"100%",
	 	  	 	"padding":"0px",
	 	  	 	"width":(this.props.width || "70px"),
	 	  	 	"height":(this.props.height || "70px"),
	 	  	 	"border":"1px solid "+theme.colors.primary,
	 	  	 	"overflow":"hidden",
	 	  	 	"textAlign":"center",
	 	  	 	"backgroundColor":theme.colors.primary,
	 	  	 	"boxShadow":"1px 2px 6px 0px rgba(0,0,0,0.2)",
	 	  	 	cursor:"pointer",

	 	  	 image:{
	 	  	 		width:(this.props.innerWidth || "40px"),
	 	  	 		"height":(this.props.innerHeight || "40px"),
	 	  	 		"margin":"5px auto",
	 	  	 		"backgroundColor":theme.colors.accent,
	 	  	 		"padding":"10px",

	 	  	  }
	 	  	 },
	 	  	 text:{
	 	  	 	fontSize:"1.2em",
	 	  	 	display:"block",
	 	  	 	"position":"relative",
	 	  	 	"border":"0px solid red",
	 	  	 	"overflow":"hidden",
	 	  	 	"margin":"0px auto",
	 	  	 	"color":(this.state.hover)?(theme.colors.text): (theme.colors.primary),
	 	  	 	cursor:"pointer",
	 	  	 	"textAlign":"center",
	 	  	 	"fontWeight":"bold",
	 	  	 	"padding":"0px",
	 	  	 	
	 	  	 }
		 },this.props.style);

		 var className  = this.props.className;
		 return (
                  <div style={style} className={className} 
                  onMouseEnter={__buttonMouseOver.bind(this)} 
                  onClick={__buttonClick.bind(this)}
                  onMouseLeave={__buttonMouseLeave.bind(this)}>
                      <div  style={style.ribble}>
                        <Image src={this.props.src || ""} style={style.ribble.image} />
                      </div>
                       <Label style={style.text}>
                           {this.props.text || ""}
                        </Label>
                   </div>
		 	    

		 	);
	})


});




var __buttonClick  =(function(event){    
    if(typeof this.props.onClick =="function"){
    	 this.props.onClick(this,this.props.eventKey);
    }
})

var __buttonMouseOver =(function(event){
	 this.setState({hover:true})
	 if(event){
	 	 if(!this.state.mouseOver){
	 	 	 this.setState({mouseOver:true});
	 	 }
	 }
});


var __buttonMouseLeave  =(function(event){
	 this.setState({hover:false})
	 if(event){
	 	   if(this.state.mouseOver){
	 	   	  this.setState({mouseOver:false});
	 	   }
	 }
})




module.exports  = RibbleButton;