// const  dotenv=require('dotenv')
// dotenv.config();
//
// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);
//
// console.log(process.argv);

// const  path=require('path')
//
// console.log("VOT:",path.parse(__filename))
//

const  siteURL ='http://localhost:8080/users?id=5123'
const  url = new URL(siteURL);
console.log(url);