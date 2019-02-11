/*
*Route module
*/

//Handler dependencie
const handlers=require("./handlers");

// Route object
const routes={
  "hello":handlers.hello,
  "notFound":handlers.notFound
};

module.exports=routes;
