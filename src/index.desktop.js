
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




ReactDom.render(<LoginForm  style={style} usernameLabel= "Username"  passwordLabel="Password" onSubmit={onsubmit} />,  document.getElementById("app"));


 




