/**
The class component is a react js component for the html li operations
 <Link 
   to="path" 
   onMouseOver={some_func_callback}
   onSelect={some_func_callback} 
   style={},
   className={},
   onMouseLeave={some_function_callback}
    />
 The is a react-js link component for javascript
*/
var React = require("react");
var Link= React.createClass({
	getDefaultProps:(function(){
    return ({
         enabled:true,
    });
    }),

   //Override the render function
    getInitialState:(function(){
    	return {}
    }),
	render:(function(){
		var style=Object.assign({
			"position":"relative",
			"fontStyle":(!this.props.enabled)?"italic":"inherit",
			"opacity":"0.8",

		}, this.props.style);

		
		var className  = " "+ ((this.props.className)?this.props.className:"");
		var to  = (this.props.to)?(this.props.to):('#')

		var label = (this.props.children)?this.props.children:(this.props.label?this.props.label:"link");

		return (
			<a
			 href={to}
			 className={className}
			 onMouseEnter={this.mouseOver.bind(this)}
			 onMouseLeave ={this.mouseLeave.bind(this)}
			 onMouseUp ={this.mouseUp.bind(this)}
			 onMouseDown ={this.mouseDown.bind(this)}
			 style={style}
			 onClick={this.select.bind(this)}>
			{label}
			</a>);
		
	})

});

/**
 The function will trigger when the mouse enter the object
*/

Link.prototype.mouseOver=(function(event){
	
	var event  = event || window.event;
	var target = event.target || event.source;
	if(!__disableCheck.call(this, event))return;
	if(target){
		if(typeof this.props.onMouseEnter =='function'){
		   this.props.onMouseEnter(this, this.props.eventKey);
		   
		}
	}
})

/**
The function will be called to trigger when the mouse leave the link object
*/
Link.prototype.mouseLeave=(function(event){
	var event  = event || window.event;
	var target = event.target || event.source;
	if(!__disableCheck.call(this, event))return;
	if(target){
		if(typeof this.props.onMouseLeave =='function'){
			var status  =this.props.onMouseLeave(this, this.props.eventKey);
			if(status ==true){
			   event.preventDefault();		     
			}
		}
	}
})


/**
The function will be called to trigger when the mouse leave the link object
*/
Link.prototype.mouseUp=(function(event){
	var event  = event || window.event;
	var target = event.target || event.source;
	if(!__disableCheck.call(this, event))return;
	if(target){
		if(typeof this.props.onMouseUp =='function'){
			var status  =this.props.onMouseUp(this, this.props.eventKey);
			if(status ==true){
			   event.preventDefault();		     
			}
		}
	}
})


/**
The function will be called to trigger when the mouse leave the link object
*/
Link.prototype.mouseDown=(function(event){
	var event  = event || window.event;
	var target = event.target || event.source;
	if(!__disableCheck.call(this, event))return;
	if(target){
		if(typeof this.props.onMouseDown =='function'){
			var status  =this.props.onMouseDown(this, this.props.eventKey);
			if(status ==true){
			   event.preventDefault();		     
			}
		}
	}
})

/**
The function will be called to trigger when the link object is selected
@method
*/

Link.prototype.select=(function(event){
	var event  = event || window.event;
	var target = event.target || event.source;

	if(!__disableCheck.call(this, event))return;
		

	if(target){
	    if(typeof this.props.onSelect==='function'){
	    	var status  = this.props.onSelect(this, this.props.eventKey);
	    	if(status==true){
	    		event.preventDefault();
	    		return;
	    	}
	     }
	   }
})

var __disableCheck =(function(event){
	if(this.props.enabled==true){
		return true;
	}
	if(this.props.tryClick){
		this.props.tryClick(new Error("@Link : this clicked button is disabled"));
	}
	return false;
})
module.exports = Link;