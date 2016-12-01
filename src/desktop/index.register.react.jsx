/**
  <Index  dataModel={onChange={func}, 
  				onClose={func}, 
  				onSubmit={func}, 
  				isModal={bool}}
*/
var React =require("react");
var LoginForm   =  require("./components/forms/login.form.react.jsx");
var Register    =  require("./components/forms/register.form.react.jsx");
var IndexHeader     =  require("./components/indexheader.react.jsx");
var dtheme      =  require("../master/themes/standard.theme.jsx");



var IndexPage =React.createClass({

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
	 	   	  margin:"0px",
	 	   	  width:"100%",
	 	   	  "position":"relative",	 	   	 
	 	   	  "overflow":"hidden",
	 	   },this.props.style);

	 	  return(
	 	        <div style={style}>
	 	          <IndexHeader  style={style.header} />
	 	          <LoginForm />
	 	        </div>
	 	  	

	 	  	)
	 })
})


IndexPage.prototype.componentDidUpdate=(function(props, states){
   
})









module.exports=IndexPage;