
var React      = require("react");
var ReactDom   = require("react-dom");
var Index      = require("./desktop/index.react.jsx");
var DashBoard  = require("./desktop/dashboard.react.jsx");

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









ReactDom.render(<Index options ={options}  />,  document.getElementById("app"));


 




