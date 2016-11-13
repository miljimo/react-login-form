
var React = require("react");
var Button = require("../button.react.jsx");
var Image  = require("../image.react.jsx");
var Arrow  = require("../arrow.react.jsx");
var LineEdit  = require("../line.edit.react.jsx");
var cssStyle  = require("../../assets/css/register.react.css");
var defaultTheme     = require("../../../master/themes/standard.theme.jsx");
var Label      = require("../label.react.jsx");






var Register = React.createClass({

     getInitialState:(function(){
       return {focus:false}

     }),   
     render:(function(){
          var  theme  =Object.assign(defaultTheme, this.props.theme);

          var  style  =Object.assign({
          	"backgroundColor":theme.colors.windowBackground,
          	"width":"100%",
          	"height":"auto",
          	"position":"relative",
          	"display":"block",
          	"overflow":"hidden",
            "paddingBottom":"20px",
            "paddingTop":"20px",
            "border":"0px solid #eee",
          	image:{
          		 width:"70px",
          		"height":"70px",
          		"margin":"10px auto auto auto",
          		"border":"3px solid "+theme.colors.primary,
          		"borderRadius":"100%",
          		"position":"relative",
              "cursor":"pointer",
          		"backgroundColor":theme.colors.primaryLight,
              "visibility":(this.props.imageSrc && this.props.imageSrc !="")?"visible":"hidden",
              "display":(this.props.imageSrc && this.props.imageSrc !="")?"block":"none",
              innerImage:{
                 width:"65px",
                 height:"65px",
                 "margin":"3px auto"
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
          		"border":"2px solid "+theme.colors.primary,
          		"margin":"0px auto",
          		"backgroundColor":theme.colors.primary,
          		"position":"relative",
          		"width":"85%",
              "borderRadius":"2px",
          		"padding":"5px",

                    fields:{
                         overflow:"hidden",
                         "borderRadius":"5px",
                         "backgroundColor":theme.colors.primaryLight,
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
                    },

                  "button":{

                  }

                   
          	}


    
          }, this.props.style);


     	   return (
     	   	   <div  ref='login' style={style} className={this.props.className} onFocus={__onfocus.bind(this)} onBlur={__onBlur.bind(this)} >
     	   	      <div style={style.image}>
                       <Image   src={this.props.imageSrc || ""} style={style.image.innerImage}/>
     	   	      </div>
                <Label theme={theme} style={style.error}>{this.props.errorMsg || null}</Label>

                    <div style={style.arrow}>
                        <Arrow   />
                    </div>
          	   	<div style={style.form}>
                      <div style={style.form.fields}>
                          <LineEdit onTextChange={__textChange.bind(this)}  ref="fullname"  
                                    className={cssStyle.fullname} 
                                    style={style.form.fields.username}  
                                    placeholder={theme.II8n.components.register.fullname}/>
                         <LineEdit onTextChange={__textChange.bind(this)} 
                                    ref="email"  
                                    className={cssStyle.email} 
                                    style={style.form.fields.username}  
                                    placeholder={theme.II8n.components.register.email}/>
                         
                          <LineEdit onTextChange={__textChange.bind(this)}  
                                    ref="username"  
                                    className={cssStyle.username} 
                                    style={style.form.fields.username} 
                                    placeholder={theme.II8n.components.register.username}/>

                          <LineEdit onTextChange={__textChange.bind(this)} 
                                     ref="password" 
                                     className={cssStyle.password}  
                                     password={true} 
                                    style={style.form.fields.password}
                                    placeholder={theme.II8n.components.register.password}/>
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
   var usernameValue  = this.refs.username.get();
   var passwordValue  = this.refs.password.get();
   var fullname       = this.refs.fullname.get();
   var email          = this.refs.email.get();
   return {username:usernameValue, password:passwordValue, "email":email, "fullname":fullname};
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
