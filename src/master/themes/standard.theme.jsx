/**
   Standard theme for the components

*/
var path = require("path");
const ICON_URL ="C:/Users/Obaro/Desktop/FirstReactApp/src/master/icons/";


var II8n     = require("../ii8n/ii8n.languages.jsx");
var theme ={
    name:"standard-theme",
    version:"1.0.0",
    "author":"obaro",
    "opacity":"0.8",
    
    colors:{
    	 "primary":"#9E9E9E",
    	 "primaryDark":"#616161",
    	 "accent":"#212121",
    	 "windowBackground":"#e0e0e0",
    	 "navigatorBar":"#bdbdbd",
    	 "primaryLight":"#F5F5F5",
    	 "secondaryText":"#757575",
    	 "primaryText":"#212121",
    	 "divider":"#BDBDBD",
    	 "error":"#D32F2F",

    },
   //font styling
   font:{
   	  style:"",

   },
   "II8n":II8n["en"],

   "resources":{
   	  icons:{
   	  	   get:(function(url){
   	  	   	    return  (ICON_URL+"/" +url);
   	  	   })
   	  }
   }
}

theme.setII8n =(function(lang){
	 var themelang= II8n[lang];
	 if(!themelang){
	 	   themelang = II8n['en'];
     }
   theme.II8n = themelang;
   
});



module.exports=theme;