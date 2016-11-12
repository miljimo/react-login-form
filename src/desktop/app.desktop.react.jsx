
var React =require("react");
var LoginForm  = require("./components/forms/login.form.react.jsx");

var App =React.createClass({

	  getInitialState:(function(){
	  	return {image:null};
	  }),
	 render:(function(){
	 	  return(<LoginForm  onTextChange={onChange.bind(this)} imageSrc={this.state.image}  usernameLabel= "Username"  passwordLabel="Password" onSubmit={onsubmit.bind(this)} />)
	 })
})


var onsubmit =(function(event){

	if(event){
		var username = event.username;
		var password  = event.password;
		console.log(event)

	}


});


var onChange =(function(event){
  if(!this.state.image  && event.username =='obaro'){
  	 this.setState({image:"C:/Users/Obaro/Desktop/FirstReactApp/src/master/images/obaro.png"});
  }else{
  	 if(this.state.image !=null){
  	 	 this.setState({image:null})
  	 }
  }
})

module.exports=App;