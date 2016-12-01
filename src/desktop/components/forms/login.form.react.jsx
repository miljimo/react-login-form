
var React = require("react");
var Button = require("../button.react.jsx");
var Image  = require("../image.react.jsx");
var Arrow  = require("../arrow.react.jsx");
var LineEdit  = require("../line.edit.react.jsx");
var cssStyle  = require("../../assets/css/login.react.css");
var defaultTheme     = require("../../../master/themes/standard.theme.jsx");
var Label      = require("../label.react.jsx");
var Seperator  = require("../seperator.react.jsx");
var Link      = require("../link.react.jsx");


var LoginForm = React.createClass({
     getDefaultProps:(function(){
       return {imageSrc:"default"}

     }),
     getInitialState:(function(){
       return {focus:false}

     }),   
     render:(function(){
          var  theme  =Object.assign(defaultTheme, this.props.theme);

          var  style  =Object.assign({
          	"backgroundColor":"",
          	"height":"400px",
          	"position":"relative",
          	"display":"block",
          	"overflow":"hidden",
            "padding":"5px",
            "paddingBottom":"20px",
            "paddingTop":"20px",
            "border":"0px solid #eee",
            "margin":"10px auto",
            title:{
              fontSize:"1.8em",
              textAlign:"center",
              "display":"block",
              "padding":"2px",
              "textShadow":"0px 0px 1px rgba(0,0,0,0.2)",
              "padding":"2px",

            },
          	image:{
          		 width:"70px",
          		"height":"70px",
          		"margin":"20px auto auto auto",
          		"border":"3px solid #d9d9d9",
          		"borderRadius":"100%",
          		"position":"relative",
          		"backgroundColor":theme.colors.windowBackground,
              "visibility":(this.props.imageSrc && this.props.imageSrc !="")?"visible":"hidden",
              "display":(this.props.imageSrc && this.props.imageSrc !="")?"block":"none",
              innerImage:{
                 width:"65px",
                 height:"65px",
                 "margin":"3px auto",
                 "backgroundColor":"#0099ff",
              }

          	},
            error:{
               textAlign:"center",
               fontSize:"0.8em",
               "fontStyle":"italic",
               "color":theme.colors.error,

            },
            "arrow":{
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
          		"border":"2px solid #d9d9d9",
          		"margin":"0px auto",
          		"backgroundColor":theme.colors.windowBackground,
          		"position":"relative",
          		"width":"85%",
              "borderRadius":"2px",
          		"padding":"5px",

                    fields:{
                         overflow:"hidden",
                         "borderRadius":"5px",
                         "backgroundColor":"#fff",
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
                              color:"#737373",
                              margin:"5px",
                              "backgroundColor":"#fff",
                         },
                         "password":{
                              "paddingLeft":"35px",
                              "backgroundPosition":"5px center",
                              "backgroundSize":"15px 15px",
                              "backgroundRepeat":"no-repeat",
                              color:"#737373",
                              margin:"5px",
                               "backgroundColor":"#fff",
                         }
                    },

                  "button":{
                       "backgroundColor":"#0099ff",
                       "color":"#e6f5ff"
                  }

                   
          	},

            lblforgetpassword:{
               fontSize:"0.9em",
               "margin":"10px auto auto auto",
               "display":"block",
               "position":"relative",
               "textAlign":"right",
               "border":"0px solid red",
               "padding":"10px",
               "width":"85%",
               "fontStyle":"italic",
               "color":"#ff5c33",
               cursor:"pointer",
            },
            lblRegisterNow:{
               fontSize:"0.9em",
               "margin":"10px auto auto auto",
               "display":"block",
               "position":"relative",
               "textAlign":"center",
               "border":"0px solid red",
               "padding":"10px",
               "width":"85%",
               "fontStyle":"italic",
               "color":"#663300",
               cursor:"pointer",
               "backgroundColor":"#ffbf80",

            },

            linkToRegister:{
                 width:"85%",
                "margin":"1px auto",
                "display":"inline",
                "border":"0px solid red",
                "textDecoration":"none",
                "padding":"5px",
                 "color":"#6600ff",
                 "fontWeight":"bold",
            }


    
          }, this.props.style);


     	   return (
     	   	   <div  ref='login' style={style}
               className={cssStyle.login + " "+ this.props.className} 
               onFocus={__onfocus.bind(this)} onBlur={__onBlur.bind(this)} >

               <Label style={style.title}>
                 Sign In
               </Label>

     	   	      <div style={style.image}>
                       <Image   src={this.props.imageSrc || ""} style={style.image.innerImage}/>
     	   	      </div>
                <Label theme={theme} style={style.error}>{this.props.errorMsg || null}</Label>

                    <div style={style.arrow}>
                        <Arrow   />
                    </div>
          	   	<div style={style.form}>
                      <div style={style.form.fields}>
                          <LineEdit onTextChange={__textChange.bind(this)}  ref="username"  
                            className={cssStyle.username} 
                            style={style.form.fields.username}  
                            placeholder={theme.II8n.components.login.username}/>
                          <LineEdit onTextChange={__textChange.bind(this)}  
                                ref="password" className={cssStyle.password}  
                                password={true} style={style.form.fields.password} 
                                placeholder={theme.II8n.components.login.password}/>
                      </div>
                         <Button  theme ={theme} text={theme.II8n.components.login.submit}  
                         style={style.form.button} 
                         onClick ={__onSubmit.bind(this)} />
          	   	</div>


                <Label style={style.lblforgetpassword}>
                   Forget your password or username?
                </Label>
             

               
     	   	    
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
  try{
     if(typeof this.props.onTextChange=='function'){
        this.props.onTextChange({data:__getData.call(this), target:this});
     }
   }catch(error){
     console.log(error)
   }
})


var __onSubmit=(function(sender, event){
    if(typeof this.props.onSubmit =='function'){
      this.props.onSubmit({data:__getData.call(this), target:this});
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


var __getData=(function(){
  var usernameValue  = this.refs.username.get();
  var passwordValue  = this.refs.password.get();
  return {username:usernameValue, password:passwordValue}
})

module.exports = LoginForm;
