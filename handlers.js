/*
 *Handler module
*/

// Create the handler object
const handlers={};
//Hello handler
handlers.hello=(data,callback)=>{
 callback(200,{"msg":"Welcome to the hello world API"});
};
//Note found handler
handlers.notFound=(data,callback)=>{
  callback(404,{"message":"page not found"});
}

module.exports=handlers;
