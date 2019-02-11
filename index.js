
/*
  *Hello world API
*/

// dependencies
const http=require("http");
const url=require("url");
const {StringDecoder}=require("string_decoder");

const config=require("./config");
const handlers=require("./handlers");
const routes=require("./route");

// create the http server
const server=http.createServer(function(req,res){
//Instantiate the string decoder object
const decoder=new StringDecoder("utf-8");
// Get the data we want from url request
const parseUrl=url.parse(req.url,true,true);
const pathName=parseUrl.pathname;
const queries=parseUrl.query;
const queryString=JSON.stringify(queries);
const method=req.method.toLowerCase();
const header=req.headers;
const trimedPath=pathName.replace(/^\/+|\/+$/g,"");

let buffer="";
// Get the post data from the url
req.on("data",(data)=>{
 buffer+=decoder.write(data);
});

req.on("end",()=>{
  buffer+=decoder.end();


console.log(buffer)
  // choose the handler for the right route resources
  const choosedHandler=typeof(routes[trimedPath])!=="undefined"?routes[trimedPath]:routes["notFound"];

  // create the data object
  const data={
    "trimedPath":trimedPath,
    "queryString":queryString,
    "headers":header,
    "method":method,
    }

// Calling the choosing handler
  choosedHandler(data,(statusCode,payload)=>{
   statusCode= typeof (statusCode)==="number"? statusCode: 200;
   payload=typeof (payload)==="object"?payload:{};
   const objectString=JSON.stringify(payload);

    res.setHeader("Content-type","application/json");
    res.writeHead(statusCode);
    res.end(objectString);
  });

});
});
// Initialize the server
server.listen(config.port,()=>{
  console.log("Server listen on port: ", config.port);;
});
