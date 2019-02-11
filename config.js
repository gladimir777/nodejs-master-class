/*
 * server config
*/

// Eenviroment object
const enviroments={};
// Development enviroment
enviroments.staging={
  "port":3000,
  "env":"staging"
}
// Production enviroment
enviroments.production={
  "port":3001,
  "env":"production"
}

// Current enviroment
let currentENviroment=typeof (process.env.NODE_ENV)==="string"?process.env.NODE_ENV.toLowerCase():"";

// enviroment to export
const enviromentToExport=typeof currentENviroment==="object"?enviroments[currentENviroment]:enviroments.staging;
module.exports=enviromentToExport;
