
var React =require("react");
var LoginForm  = require("./components/forms/login.form.react.jsx");
var Register  = require("./components/forms/register.form.react.jsx");
var AppLogo    = require("./components/app.logo.react.jsx");
var theme      = require("../master/themes/standard.theme.jsx");
var Dialog    = require("react-node-modal-dialog");



var App =React.createClass({

	  getInitialState:(function(){
	  	return {isRegister:false, image:"C:/Users/Obaro/Desktop/FirstReactApp/src/master/images/obaro.png",
	  	defaultImage:"C:/Users/Obaro/Desktop/FirstReactApp/src/master/images/defaultuser.png"};
	  }),
	 render:(function(){

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

	 	   	 }
	 	   	 
	 	   },this.props.style);

	 	  return(
	 	  	<Dialog modal={true}  center={true} style={style}>
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


var __setRightContent =(function(style, theme){
        var contentHtml =null;
	   if(this.state.isRegister){
	   	  contentHtml =(
	   	  	      <Register theme={theme} onTextChange={onChange.bind(this)} 
			 	  	imageSrc={this.state.defaultImage}  
			 	    style= {style.register} 
			 	  	onSubmit={onsubmit.bind(this)} />);
	   }else{
	   	contentHtml =(
	   		<LoginForm theme={theme} 
	   			onTextChange={onChange} 
	   			style={style.login}
	   			imageSrc={this.state.image}
	   			onSubmit={onsubmit.bind(this)} />
	   			);
	   }

	 return contentHtml;
});



var __setLeftContent =(function(style, theme){

	  return  (<AppLogo style={style} theme={theme} onSwitch={__onSwitch.bind(this)} />);
})



var onsubmit =(function(event){

	if(event){
		var username = event.username;
		var password  = event.password;
		console.log(event)

	}


});


var onChange =(function(event){
  console.log(event)
})


var __onSwitch=(function(){
	 if(!this.state.isRegister){
	 	 this.setState({isRegister:true})
	 }else{
	 	 this.setState({isRegister:false})
	 }
})


module.exports=App;