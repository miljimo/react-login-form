
var React     = require("react");
var ReactDom  = require("react-dom");
var LoginForm  = require("./desktop/components/forms/login.form.react.jsx");


var style={
	  margin:"10px auto",
}

var onsubmit =(function(event){

	if(event){
		var username = event.username;
		var password  = event.password;
		console.log(event)

	}


});
const image ="C:/Users/Obaro/Desktop/FirstReactApp/src/master/images/obaro.png"



ReactDom.render(<LoginForm  imageSrc={image} style={style} usernameLabel= "Username"  passwordLabel="Password" onSubmit={onsubmit} />,  document.getElementById("app"));


 




