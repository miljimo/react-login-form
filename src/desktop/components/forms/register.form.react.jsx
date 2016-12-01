
var React = require("react");
var Button = require("../button.react.jsx");
var Image  = require("../image.react.jsx");
var Arrow  = require("../arrow.react.jsx");
var LineEdit  = require("../line.edit.react.jsx");
var cssStyle  = require("../../assets/css/register.react.css");
var defaultTheme     = require("../../../master/themes/standard.theme.jsx");
var Label      = require("../label.react.jsx");
var Seperator  = require("../seperator.react.jsx");
var Link      = require("../link.react.jsx");






var Register = React.createClass({

     getDefaultProps:(function(){
      return {imageSrc:"default"}
     }),
     getInitialState:(function(){
       return {focus:false}

     }),   
     render:(function(){
          var  theme  =Object.assign(defaultTheme, this.props.theme);

          var  style  =Object.assign({
          	"backgroundColor":"#fff",
          	"height":"auto",
          	"position":"relative",
          	"display":"block",
          	"overflow":"hidden",
            "paddingBottom":"20px",
            "paddingTop":"20px",
            "border":"0px solid #eee",
            title:{
               fontSize:"1.6em",
               padding:"4px",
               "display":"block",
               textAlign:"center",
               "textShadow":"0px 0px 1px rgba(0,0,0,0.2)",
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
                 "backgroundColor":"#f2f2f2",
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
          		"border":"1px solid #d9d9d9",
          		"margin":"0px auto",
          		"backgroundColor":theme.colors.windowBackground,
          		"position":"relative",
          		"width":"85%",
              "borderRadius":"2px",
          		"padding":"5px",

                    fields:{
                         overflow:"hidden",
                         "borderRadius":"5px",
                         "backgroundColor":"white",
                         "padding":"0px",
                         "margin":"0px",
                         "marginBottom":"10px",
                         "position":"relative",
                         "display":"block",

                         username:{
                              borderBottom:"1px solid #e6e6e6",
                              "paddingLeft":"10px",
                              "backgroundPosition":"5px center",
                              "backgroundSize":"15px 15px",
                              "backgroundRepeat":"no-repeat",
                              color:"#737373",
                              "padding":"5px",
                              "backgroundColor":"#fff",
                         },
                         "password":{
                              "paddingLeft":"10px",
                              "backgroundPosition":"5px center",
                              "backgroundSize":"15px 15px",
                              "backgroundRepeat":"no-repeat",
                              borderBottom:"1px solid #e6e6e6",
                              color:"#737373",
                               "padding":"5px",
                               "backgroundColor":"#fff",
                         }
                    },

                  "button":{
                    "backgroundColor":"#0099ff",
                     "color":"#e6f5ff"

                  }

                   
          	},

            seperator:{
               marginTop:"20px",
               "border":"1px solid #e6e6e6",
            },

            linkToLogin:{

              color:"#e67300",
              padding:"10px",
              "margin":"0px",
              "width":"85%",
              "display":"block",
              "textAlign":"right",
              "position":"block",
              fontSize:"0.9em",
              "fontStyle":"italic",
            }


    
          }, this.props.style);


     	   return (
     	   	   <div  
                 ref='login' 
                 style={style} 
                 className={cssStyle.register+" "+ this.props.className} 
                 onFocus={__onfocus.bind(this)} 
                 onBlur={__onBlur.bind(this)} >

                 <Label style={style.title}>
                     Create New Account 
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
                          <LineEdit onTextChange={__textChange.bind(this)}  ref="firstname"  
                                    className={cssStyle.fullname} 
                                    style={style.form.fields.username}  
                                    placeholder={"Firstname"}/>
                         <LineEdit onTextChange={__textChange.bind(this)}  ref="lastname"  
                                    className={cssStyle.fullname} 
                                    style={style.form.fields.username}  
                                    placeholder={"Lastname"}/>

                         <LineEdit onTextChange={__textChange.bind(this)} 
                                    ref="email"  
                                    className={cssStyle.email} 
                                    style={style.form.fields.username}  
                                    placeholder={"Email Address"}/>
                         
                        

                          <LineEdit onTextChange={__textChange.bind(this)} 
                                     ref="password" 
                                     className={cssStyle.password}  
                                     password={true} 
                                    style={style.form.fields.password}
                                    placeholder={"Password"}/>

                         <LineEdit onTextChange={__textChange.bind(this)} 
                                     ref="cfpassword" 
                                     className={cssStyle.password}  
                                     password={true} 
                                     style={style.form.fields.password}
                                     placeholder={"Confirm Password"}/>
                      </div>

                         <Button  theme ={theme} text={theme.II8n.components.register.submit}  
                         style={style.form.button} onClick ={__onSubmit.bind(this)} />
          	   	</div>
                  
                
     	   	    
     	   	   </div>
     	   	)
     })




});




Register.prototype.componentDidMount=(function(preState, preProps){
   
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
       this.props.onTextChange({data:__getData.call(this), target:this});
     }
})


var __onSubmit=(function(sender, event){
    if(typeof this.props.onSubmit =='function'){
      this.props.onSubmit({data:__getData.call(this), target:this});
    }
})


var __getData= (function(event){
   var usernameValue   = this.refs.username.get();
   var passwordValue   = this.refs.password.get();
   var firstname       = this.refs.firstname.get();
   var lastname        = this.refs.lastname.get();
   var cpassword       = this.refs.cpassword.get();
   var email           = this.refs.email.get();
   return {username:usernameValue, 
                 password:passwordValue,
                 "email":email, 
                 "lastname":lastname ,
                  "firstname":firstname ,
                  "cpassword":cpassword};
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
module.exports = Register;
