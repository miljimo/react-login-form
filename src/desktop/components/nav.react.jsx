//nav.react.jsx


var React = require("react");
var Link  = require("./link.react.jsx");
var defaultTheme     = require("../../master/themes/standard.theme.jsx");

var Nav =React.createClass({


	render:(function(){

		var theme=Object.assign(defaultTheme , this.props.theme);

		var style =Object.assign({
			 border:"0px solid #000",
			"margin":"10px auto",
			"display":"block",
			"overflow":"hidden",
			"padding":"5px",

			list:{
				margin:"0px",
				"padding":"0px",
				"listStyle":"none",

				li:{
					display:"block",
					"float":"right",
					"margin":"0px 15px 0px 0px",
					"padding":"0px",
					a:{
						"textDecoration":"none",
						"padding":"5px",
						color:"#000",
						fontSize:"0.8em",
						"fontWeight":"bold",
					}
				}
			}
		



		},this.props.style)

		return(

				<div style={style}>
				    <ul style={style.list}>
				       <li style={style.list.li}>
				          <Link to="#user/register" style={style.list.li.a}>Create Account</Link>
				       </li>

				       <li style={style.list.li}>
				          <Link to="#user/login" style={style.list.li.a}>Sign In</Link>
				       </li>

				    </ul>
				</div>
			);
	})
})


module.exports=Nav;