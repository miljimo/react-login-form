/**
  <Index  dataModel={onChange={func}, 
  				onClose={func}, 
  				onSubmit={func}, 
  				isModal={bool}}
*/
var React =require("react");
var LoginForm  = require("./components/forms/login.form.react.jsx");
var Register   =  require("./components/forms/register.form.react.jsx");
var AppLogo    = require("./components/app.logo.react.jsx");
var dtheme      = require("../master/themes/standard.theme.jsx");
var Dialog     =  require("react-node-modal-dialog");


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
	 	   	  backgroundColor:theme.colors.windowBackground,
	 	   	  "boxShadow":"0px 1px 2px 0px rgba(0,0,0,0.2)",
	 	   	  padding:"5px",
             leftContent:{
             	width:"55%",
             	"float":"left",
             	 border:"0px solid red",


             },
	 	   	 rightContent:{
	 	   	 	width:"40%",
	 	   	 	"float":"right",
	 	   	 	 "register":{
	 	   	  	 
	 	   	  	  "borderLeft":"1px solid "+theme.colors.divider,

	 	   	      },
		 	   	  "login":{	 	   	  	
		 	   	  	"borderLeft":"1px solid "+theme.colors.divider,

		 	   	  }

	 	   	 },
	 	   	 "closeButton":{
	 	   	 	backgroundColor:theme.colors.primary,
	 	   	 	float:"right",
	 	   	 	"position":"relative",
	 	   	 	"margin":"20px",
	 	   	 	"borderRadius":"100%",
	 	   	 	"border":"0px solid "+theme.colors.primaryLight,
	 	   	 	"boxShadow":"0px 0px 0px 0px rgba(0,0,0,0)",
	 	   	 	
	 	   	 }	 	   	 
	 	   },this.props.style);

	 	  return(
	 	  	<Dialog visible={this.state.visible} fillParent={this.props.options.modal} modal={this.props.options.modal} 
	 	  	 center={this.props.options.center} style={style} enableCloseButton={this.props.options.modal || false} onClose={__onClose.bind(this)}>
	 	  	  <div style={ style.leftContent}>
	 	  	      {__setLeftContent.call(this, style.leftContent, theme)}
	 	  	  </div>

              <div style={ style.rightContent}>
                 {__setRightContent.call(this, style.rightContent, theme)}
              </div>

	 	  	</Dialog>

	 	  	)
	 })
})


IndexPage.prototype.componentDidUpdate=(function(props, states){
   
})





var __setRightContent =(function(style, theme){
        var contentHtml =null;
	   if(this.state.isRegister){
	   	  contentHtml =(
	   	  	      <Register theme={theme} onTextChange={onRegisterChange.bind(this)} 
			 	  	imageSrc={this.props.options.imageSrc}  
			 	    style= {style.register} 
			 	  	onSubmit={onRegister.bind(this)} />);
	   }else{
	   	contentHtml =(
	   		<LoginForm theme={theme} 
	   			onTextChange={onLoginChange.bind(this)} 
	   			style={style.login}
	   			imageSrc={this.props.options.imageSrc}
	   			onSubmit={onLogin.bind(this)} />
	   			);
	   }

	 return contentHtml;
});



var __setLeftContent =(function(style, theme){

	  return  (<AppLogo style={style} theme={theme} onSwitch={__onSwitch.bind(this)} />);
})



var onLogin =(function(event){
	if(event){
		var data =Object.assign({
			 "form":"login",
		}, event.data);
		if(typeof this.props.options.onSubmit=='function'){
			 this.props.options.onSubmit(data);
		}

	}
});


var onRegister =(function(event){

	if(event){
		var username = event.data.username;
		var password  = event.data.password;
		var data =Object.assign({
			 "username":username,
			 "password":password,
			 "form":"register",
		}, event.data);

		if(typeof this.props.options.onSubmit=='function'){
			 this.props.options.onSubmit(data);
		}

	}

});


var onLoginChange=(function(event){

	if(typeof this.props.options.onChange =='function'){
		var data =Object.assign({
			"form":"login"
		}, event.data)
		 this.props.options.onChange(data);
	}
})

var onRegisterChange=(function(event){
	if(typeof this.props.onChange =='function'){
		var data =Object.assign({
			"form":"register"
		}, event.data)
		 this.props.options.onChange(data);
	}
})


var __onSwitch=(function(){
	 if(!this.state.isRegister){
	 	 this.setState({isRegister:true});
	 	 if(typeof this.props.options.onChange=='function'){
	 	 	 this.props.options.onChange({activeButton:"login"});
	 	 	 
	 	 }
	 }else{
	 	 this.setState({isRegister:false})
	 	 if(typeof this.props.options.onChange=='function'){
	 	 	 this.props.options.onChange({activeButton:"register"});
	 	 }
	 	
	 }
})


var __onClose=(function(){
	  if(typeof this.props.options.onClose  =='function'){
	  	 var status = this.props.options.onClose(this);
	  	 if(status==undefined   || status ==true){
	  	 	 this.setState({visible:false})
	  	 }
	  }
})

module.exports=IndexPage;