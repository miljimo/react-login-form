
var React      = require("react");
var ReactDom   = require("react-dom");


var IndexLogin      = require("./desktop/index.react.jsx");
var IndexRegister      = require("./desktop/components/forms/register.form.react.jsx");
var LoginForm   =  require("./desktop/components/forms/login.form.react.jsx");


const ImageURL  ="C:/Users/Obaro/Desktop/FirstReactApp/src/master/images/defaultuser.png";

var options={
	 "modal":true,
	 "center":true,
	 "lang":"en",
	 imageSrc:ImageURL,
	 onSubmit:(function(data){
	 	console.log(data)

	 }),
	 onChange:(function(data){
	 	console.log(data)

	 }),
	 onClose:(function(){
	 	console.log(close)

	 }),


}









ReactDom.render(<IndexLogin  options ={options}  />,  document.getElementById("app"));


 




