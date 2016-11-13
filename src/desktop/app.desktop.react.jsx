
var React =require("react");
var LoginForm  = require("./components/forms/login.form.react.jsx");

var App =React.createClass({

	  getInitialState:(function(){
	  	return {image1:null,image2:null};
	  }),
	 render:(function(){
	 	  return(
	 	  	<div>
	 	  	<LoginForm  onTextChange={onChange1.bind(this)} 
	 	  	imageSrc={this.state.image1}  
	 	  	usernameLabel= "Username"  
	 	  	passwordLabel="Password" onSubmit={onsubmit.bind(this)} />


	 	    <LoginForm  onTextChange={onChange2.bind(this)} 
	 	  	imageSrc={this.state.image2}  
	 	  	usernameLabel= "Username"  
	 	  	passwordLabel="Password" onSubmit={onsubmit.bind(this)} />

	 	  	</div>

	 	  	)
	 })
})


var onsubmit =(function(event){

	if(event){
		var username = event.username;
		var password  = event.password;
		console.log(event)

	}


});


var onChange1 =(function(event){
  if(!this.state.image1  && event.username =='obaro'){
  	 this.setState({image1:"C:/Users/Obaro/Desktop/FirstReactApp/src/master/images/obaro.png"});
  }else{
  	 if(this.state.image1 !=null && event.username !="obaro"){
  	 	 this.setState({image1:null})
  	 }
  }
})


var onChange2 =(function(event){
  if(!this.state.image2  && event.username =='obaro'){
  	 this.setState({image2:"C:/Users/Obaro/Desktop/FirstReactApp/src/master/images/obaro.png"});
  }else{
  	 if(this.state.image2 !=null && event.username !="obaro"){
  	 	 this.setState({image2:null})
  	 }
  }
})

module.exports=App;