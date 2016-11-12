//line.edit.react.jsx

var React = require("react");

var LineEdit  = React.createClass({

	   getDefaultProps:(function(){
	   	  return {password:false}
	   }),
      

	   render:(function(){



	   	     var style=Object.assign({
	   	     	display:"block",
	   	     	"width":"100%",
	   	     	"border":"0px",
	   	     	"margin":"0px",
	   	     	"marginBottom":"0px",
	   	     	"padding":"2px 2px 2px 15px",
	   	     	"height":"30px",
	   	     }, this.props.style);

	   	    return (<input  ref='textfield' style={style} 
	   	    			type={(this.props.password==true)?"password":"text"}
	   	    			 placeholder={this.props.placeholder} 
	   	    			 onChange={__textChange.bind(this)}
	   	    			 value ={this.props.value} 
	   	    			 className={this.props.className}/>);

	   })
});



LineEdit.prototype.get=(function(){
	  var target  = this.refs.textfield;
	  return target.value;
})




var __textChange=(function(event){

	var event  = event || window.event;
	if(event){
		  var target  = event.target || event.source;
		  if(target){
              var text = target.value;
              if(typeof this.props.onTextChange ==='function'){
              	 this.props.onTextChange(target, text);
              }
		  }
	}
})


module.exports = LineEdit;




