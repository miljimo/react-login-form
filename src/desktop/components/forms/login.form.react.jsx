
var React = require("react");
var Button = require("../button.react.jsx");
var Image  = require("../image.react.jsx");
var Arrow  = require("../arrow.react.jsx");
var LineEdit  = require("../line.edit.react.jsx");
var cssStyle  = require("../../assets/css/login.react.css");






var LoginForm = React.createClass({

     getInitialState:(function(){
       return {focus:false}

     }),   
     render:(function(){

          var style  =Object.assign({
          	"backgroundColor":"rgba(234, 86, 84,1)",
          	"width":"300px",
          	"height":"auto",
          	"position":"relative",
          	"display":"block",
          	"overflow":"hidden",
            "paddingBottom":"20px",
            "paddingTop":"20px",

          	image:{
          		 width:"70px",
          		"height":"70px",
          		"margin":"10px auto auto auto",
          		"border":"2px solid rgba(210, 72, 70,1)",
          		"borderRadius":"100%",
          		"position":"relative",
          		"backgroundColor":"rgba(210, 72, 70,0.8)",
              "visibility":(this.props.imageSrc && this.props.imageSrc !="")?"visible":"hidden",
              "display":(this.props.imageSrc && this.props.imageSrc !="")?"block":"none",

          	},
               "arrowWrapper":{
                    padding:"0px",
                    "margin":"0px",
                    "border":"0px solid blue",
                    "textAlign":"center",
                    "margin":"10px auto 0px auto",
                    "overflow":"hidden",
                    "visibility":(this.props.imageSrc && this.props.imageSrc !="")?"visible":"hidden",
                    "display":(this.props.imageSrc && this.props.imageSrc !="")?"block":"none",

               },
          	form:{
          		"border":"2px solid rgba(210, 72, 70,1)",
          		"margin":"0px auto",
          		"backgroundColor":"rgba(210, 72, 70,0.8)",
          		"position":"relative",
          		"width":"80%",
          		"padding":"5px",


                    fields:{
                         overflow:"hidden",
                         "borderRadius":"5px",
                         "backgroundColor":"rgba(255,255,255,0.8)",
                         "padding":"0px",
                         "margin":"0px",
                         "marginBottom":"10px",
                         "position":"relative",
                         "display":"block",

                         username:{
                              borderBottom:"1px solid #e6e6e6",
                              "paddingLeft":"35px",
                              "backgroundPosition":"5px center",
                              "backgroundSize":"15px 15px",
                              "backgroundRepeat":"no-repeat",
                         },
                         "password":{
                              "paddingLeft":"35px",
                              "backgroundPosition":"5px center",
                              "backgroundSize":"15px 15px",
                              "backgroundRepeat":"no-repeat",
                         }
                    }

                   
          	}


    
          }, this.props.style);


     	   return (
     	   	   <div  ref='login' style={style} className={this.props.className} onFocus={__onfocus.bind(this)} onBlur={__onBlur.bind(this)} >
     	   	      <div style={style.image}>
                       <Image  src={this.props.imageSrc || ""}/>
     	   	      </div>

                    <div style={style.arrowWrapper}>
                        <Arrow  />
                    </div>
          	   	<div style={style.form}>
                      <div style={style.form.fields}>
                          <LineEdit onTextChange={__textChange.bind(this)}  ref="username"  className={cssStyle.username} style={style.form.fields.username}  placeholder={this.props.usernameLabel}/>
                          <LineEdit onTextChange={__textChange.bind(this)}  ref="password" className={cssStyle.password}  password={true} style={style.form.fields.password} placeholder={this.props.passwordLabel}/>
                      </div>

                         <Button text="LOGIN"  onClick ={__onSubmit.bind(this)} />
          	   	</div>
     	   	    
     	   	   </div>
     	   	)
     })




});




LoginForm.prototype.componentDidMount=(function(preState, preProps){
   
   if(!this.__eventsAdded){
       this.__eventsAdded=true;
       var target = this.refs.login;
        target.addEventListener("keypress",(function(event)
        {
            __enter.call(this,event);
        }).bind(this))

   }
   
})



var __textChange=(function(target, text){
     if(typeof this.props.onTextChange=='function'){
       var usernameValue  = this.refs.username.get();
       var passwordValue  = this.refs.password.get();
       this.props.onTextChange({username:usernameValue, password:passwordValue, target:this});
     }
})


var __onSubmit=(function(sender, event){
    if(typeof this.props.onSubmit =='function'){
      var usernameValue  = this.refs.username.get();
      var passwordValue  = this.refs.password.get();
      this.props.onSubmit({username:usernameValue, password:passwordValue, target:this});
    }
})



var __onfocus=(function(){
  if(!this.state.focus){
        this.setState({focus:true});
   }

});


var __onBlur =(function(event){
   if(this.state.focus){
        this.setState({focus:false});
   }
})


var __enter=(function(event){
  if(this.state.focus){
     var code  = event.charCode || event.keyCode ;
      if(code ==13){
          //submit the form
          __onSubmit.call(this, this, event);
      }
  }

    


})
module.exports = LoginForm;
