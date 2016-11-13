//app.logo.react.jsx

var React =require("react");
var Label = require("./label.react.jsx");
var dtheme     = require("../../master/themes/standard.theme.jsx");
var Seperator  = require("./seperator.react.jsx");
var Button = require("./button.react.jsx");
var Image  = require("./image.react.jsx");
var RibbleButton = require("./ribble.button.react.jsx");

var AppLogo = React.createClass({


     getInitialState:(function(){
     	 return {image:0, page:"Create Account",selected:true};

     }),
	 render:(function(){

	 	  var theme = Object.assign(dtheme, this.props.theme);
	 	  var style =Object.assign({
	 	  	"display":"block",	 	  	
	 	  	"position":"relative",	 	  	
	 	  	"border":"0px solid green",
	 	  	"overflow":"hidden",
	 	  	"width":"100%",

	 	  	logo:{
	 	  		"width":"300px",
	 	  		"display":"block",
	 	  		"overflow":"hidden",
	 	  		"margin":"10px auto",
	 	  		"border":"0px solid #eee",
	 	  		"padding":"5px 5px 0px 5px",
	 	  		"textAlign":"center",
	 	  	H:{
               fontSize:"3em",
               "display":"block",
               "width":"40px",
               "overflow":"hidden",              
               "border":"0px solid red",
               "textAlign":"center",
               "position":"relative",
               "fontWeight":"bold",
                "float":"left",
                "color":theme.colors.accent,
	 	  	}, 
	 	  	O:{
               fontSize:"2em",
               "display":"block",
               "width":"40px",
               "overflow":"hidden",
               "border":"0px solid red",
               "textAlign":"center",
               "position":"relative",
               "fontWeight":"bold",
               "float":"left",
               "top":"8px",
               "color":theme.colors.primary,
	 	  	},
	 	  	W:{
               fontSize:"2.5em",
               "display":"block",
               "width":"40px",
               "overflow":"hidden",
               "border":"0px solid red",
               "textAlign":"center",
               "position":"relative",
               "fontWeight":"bold",
                "float":"left",
               "color":theme.colors.accent,
               "top":"2px",
	 	  	},
	 	  	F:{
               fontSize:"3em",
               "display":"block",
               "width":"40px",
               "overflow":"hidden",
               "border":"0px solid red",
               "textAlign":"center",
               "position":"relative",
               "fontWeight":"bold",
                "float":"left",
                marginLeft:"20px",
                "color":theme.colors.primaryDark,
	 	  	},
	 	  	A:{
               fontSize:"2.5em",
               "display":"block",
               "width":"30px",
              "overflow":"hidden",
               "border":"0px solid red",
               "textAlign":"center",
               "position":"relative",
               "fontWeight":"bold",
                "float":"left",
                "color":theme.colors.accent,
                marginLeft:"5px",
	 	  	},
	 	  	R:{
               fontSize:"2.0em",
               "display":"block",
               "width":"40px",
               "overflow":"hidden",
               "border":"0px solid red",
               "textAlign":"center",
               "position":"relative",
               "fontWeight":"bold",
               "float":"left",
               "color":theme.colors.primary,
	 	  	},
	 	  },
	 	  seperator:{
	 	  	  display:"block",
	 	  	  width:"70%",
	 	  	  "margin":"1px auto",
	 	  },
	 	  slogon:{
              display:"block",
              "position":"relative",
              textAlign:"center",
              "padding":"5px",
              "color":theme.colors.primary,
              "fontSize":"0.9em",
              "fontStyle":"italic",
	 	  },
	 	  note:{
	 	  	padding:"0px",
	 	  	color:theme.colors.text,
	 	  	width:"90%",
	 	  	"margin":"10px auto",
	 	  	"fontStyle":theme.font.style,
	 	  },
	 	  navButtons:{
	 	  	   width:"100px",
	 	  	   "margin":"10px auto",
	 	  	
	 	  }
	 	  	
	 	  });

           return (<div style={style}>



           	       <div style={style.logo}>
	                    <Label style={style.logo.H}> H </Label>
	                    <Label style={style.logo.O}> O </Label>
	                    <Label style={style.logo.W}> W </Label>
	                    <Label style={style.logo.F}> F </Label>
	                    <Label style={style.logo.A}> A </Label>
	                    <Label style={style.logo.R}> R </Label>
                    </div>

                   <Seperator theme={theme} style={style.seperator}/>
                   <Label style={style.slogon}  theme={theme}>
                      {theme.II8n.components.applogo.slogon}
                      
                      
                   </Label>

                   <div style={style.note}>
                        {theme.II8n.components.applogo.note}
                   </div>


                   <div style={style.navButtons}>
                     <RibbleButton  onClick= {__onSwitchRegister.bind(this)} text={this.state.page} 
                     src={(this.state.selected==true)?theme.resources.icons.get("newuser.png"):theme.resources.icons.get("memberlogin.png")}
                      theme={theme}/>
                   </div>


           	</div>);
	 })
});



var __onSwitchRegister=(function(sender, event){
	if(typeof this.props.onSwitch=='function'){
		 if(!this.state.selected){
		 	 this.setState({selected:true, page:"Create Account", image:1});
		 }else
		    this.setState({selected:false, page:"Log In", image:0});
		 this.props.onSwitch({to:(this.selected?"register":"login"), selected: this.state.selected});
	}


})
module.exports =AppLogo;