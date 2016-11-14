
var React      = require("react");
var ReactDom   = require("react-dom");
var Index      = require("./desktop/index.react.jsx");
var DashBoard  = require("./desktop/dashboard.react.jsx");


const ImageURL  ="C:/Users/Obaro/Desktop/FirstReactApp/src/master/images/defaultuser.png";


var onSubmit=(function(data){

	console.log(data)
	
})

var onChange =(function(data){

	 onSubmit(data);
})

var onClose=(function(){
	console.log("Closed")
	return false;

});




ReactDom.render(<Index onClose={onClose} imageSrc={ImageURL} modal={true} onChange={onChange} onSubmit={onSubmit}  lang={"en"}/>,  document.getElementById("app"));


 




