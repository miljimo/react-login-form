/**
  <Index  dataModel={onChange={func}, 
  				onClose={func}, 
  				onSubmit={func}, 
  				isModal={bool}}
*/
var React =require("react");
var LoginForm   =  require("./forms/login.form.react.jsx");
var Register    =  require("./forms/register.form.react.jsx");
var IndexHeader     =  require("./indexheader.react.jsx");
var dtheme      =  require("../../master/themes/standard.theme.jsx");



var Template =React.createClass({

	   getDefaultProps:(function(){
	   	  var options ={
		            modal:false,
		            "lang":"en",
		            onSubmit:(function(){

		            }),
		            onChange:(function(){

		            }),
		            onClose:(function(){

		            }),
		   	  };
		return {"options":options};
	   }),

	  getInitialState:(function(){
	  	return {isRegister:false};
	  }),
	 render:(function(){
	 	  var theme = Object.assign(dtheme, this.props.theme);
	 	  theme.setII8n(this.props.lang);

	 	   var style=Object.assign({	 	   	 
	 	   	  padding:"0px",
	 	   	  margin:"0px auto",
	 	   	  width:"85%",	 	   	 
	 	   	  "position":"relative",	 	   	 
	 	   	  "overflow":"hidden",
	 	   	  contextStyle:{
	 	   	  	"position":"relative",
	 	   	  	"border":"0px solid "+theme.colors.windowBackground,
	 	   	  	"overflow":"hidden",
	 	   	  	"width":"85%",
	 	   	  	"margin":"-75px auto auto auto",	 	   	  	
	 	   	  	"padding":"0px",
	 	   	  	"backgroundColor": "white",
	 	   	  	"borderTopLeftRadius":"5px",
	 	   	  	"borderTopRightRadius":"5px",
	 	   	  	"border":"0px solid  #b3b3b3", 


	 	   	  },
	 	   	 
	 	   },this.props.style);

	 	  return(
	 	        <div style={style}>
	 	          <IndexHeader  style={style.header} />
	 	     
	 	          <div style={style.contextStyle}>
	 	            {this.props.children || null}
	 	          	
	 	          </div>
	 	          
	 	        </div>
	 	  	

	 	  	)
	 })
})


Template.prototype.componentDidUpdate=(function(props, states){
   
})









module.exports=Template;