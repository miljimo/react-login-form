var React =require("react");
var dtheme      =  require("../../master/themes/standard.theme.jsx");
var cssStyle  = require("../assets/css/header.react.css");
var Link      = require("./link.react.jsx");
var NavBar    = require("./nav.react.jsx");

var IndexHeader= React.createClass({

	 render:(function(){
        var theme  = Object.assign(dtheme, this.props.theme);
	 	 var style =Object.assign({
             padding:"0px",
            "margin":"0px",            
            "border":"0px",
            "borderBottom":"0px solid  #b3b3b3",                    
            "width":"100%",
            "min-height":"175px",
            "backgroundColor":theme.colors.primaryLight,
            "borderBottomRightRadius":"5px",
            "borderBottomLeftRadius":"5px",

            logo:{
            	   "borderRight":"0px solid #bfbfbf",
            	   "padding":"5px",
		           h1:{
		           	    margin:"0px",
		           	   "padding":"1px",
		           },
		           "slogon":{
		           	  fontSize:"0.8em",
		           	  "display":"block",
		           	  "position":"relative",
		           	  "textAlign":"center",
		           	 
		           }
            },

            logoLink:{
            	textDecoration:"none",

            },

            "menubar":{
            	border:"0px solid red",
            	"height":"85px",
            }
      

	 	 },this.props.style)



	 	return (
	 		<div style={style} className={cssStyle.header}> 
	 		    <ul>
	 		      <li className={cssStyle.divLogo}>
	 		      	 <Link style={style.logoLink}>
			 		      <div style={style.logo} className={cssStyle.logo}>
			 		          <h1 style={style.logo.h1} className={cssStyle.logoName}> IntGraduate.com</h1>
			 		          <span style={style.logo.slogon}>Graduate's Internation Student Jobs</span>
			 		      </div>
		 		      </Link>
	 		      </li>

	 		       <li  className={cssStyle.divMenu}>
	 		           <div style={style.menubar}>
	 		             <NavBar />
	 		           </div>
	 		      </li>




	 		   </ul>
	 		</div>);

	 })
})


module.exports= IndexHeader;