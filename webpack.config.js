
var path  = require("path");

const   BUILD_DIR   = path.resolve(__dirname +"/build");
const   SOURCE_DIR  = path.resolve(__dirname+"/src");


module.exports ={

	   "entry":SOURCE_DIR+"/index.desktop.js",
	   "output":{
	   	 "filename":"index.desktop.js",
	   	 "path":BUILD_DIR
	   },
	   module:{

	   	  loaders:[
               {
               	 test:/\.jsx?$/,
               	 exclude:/node_modules/,
               	 loader:"babel",
               	 query:{
               	 	presets:["es2015", "react"]
               	 }

               },
               {
               	  test:/\.css$/,
               	  "loader":"style-loader!css-loader"
               },
               {
               	test:/\.png$/,
               	"loader":"url-loader?limit=100000"
               },
               {
               	test:/\.jpg$/,
               	"loader":"file-loader"
               }
               
	   	   ]


	   }
}



