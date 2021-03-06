/**
  <Index  dataModel={onChange={func}, 
  				onClose={func}, 
  				onSubmit={func}, 
  				isModal={bool}}
*/
var React =require("react");
var LoginForm   =  require("./components/forms/login.form.react.jsx");
var Register    =  require("./components/forms/register.form.react.jsx");
var dtheme      =  require("../master/themes/standard.theme.jsx");
var Template    = require("./components/guest.template.react.jsx");
import {Router, Route,browserHistory, IndexRoute,hashHistory,Redirect} from "react-router";

var IndexPage =React.createClass({

	  

	  getInitialState:(function(){
	  	return {isRegister:false};
	  }),
	 render:(function(){
	 	  var theme = Object.assign(dtheme, this.props.theme);
	 	  theme.setII8n(this.props.lang);

	 	   var style=Object.assign({	 	   	 
	 	   	 
	 	   	 
	 	   },this.props.style);

	 	  return(
	 	  	
	 	  	    <Template>
		 	  	     <Router history={hashHistory}>
		 	  	     	  <Route  name='home'  path='/' component={LoginForm} />
		 	  	     	  <Route name='register'  path='user/register' component={Register} />
                          <Route name='login'     path='/user/login'    component={LoginForm} />
		 	  	     </Router>
		 	  	     
	 	  	    </Template>
	 	  
	 	       
	 	  	

	 	  	)
	 })
})


IndexPage.prototype.componentDidUpdate=(function(props, states){
   
})









module.exports=IndexPage;