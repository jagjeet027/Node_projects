// const { log } = require('console');
// var fs =require('fs');
// var os = require('os');

// var user= os.userInfo();
// console.log(user);
// let user1=os.freemem();
// let us=os.hostname();
// console.log(user1);
// console.log(us);
// let cp=os.cpus()
// // let eo=os.EOL()
// let ep=os.endianness()
// let epo=os.homedir()
// let epo1=os.platform()
// let epo2=os.release()
// let epo3=os.tmpdir()

// // console.log(us);
// // console.log(cp);
// // // console.log(eo);
// // console.log(ep);
// // console.log(epo);
// // console.log(epo1);
// // console.log(epo2);
// // console.log(epo3);
// // console.log(user1);
// // // console.log(us)
// // console.log(user.username );


// fs.appendFile('greeting.txt','Hello Baby'+ user.username +'! \n', ()=>{
//   if (user.username=='jagjeet kumar'){
//     console.log(us);
//     console.log(cp);
//     console.log(ep);
//     console.log(epo);
//     console.log(epo1);
//     console.log(epo2);
//     console.log(epo3);

//   }else{
//     console.log("your duplicate file is completed")
//   }
// //  console.log("file is created")

// })



// // fs.appendFile("images.txt","hey\n", 'i am'+user.username,'!\n',()=>{
// //     console.log('now 2nd pdf file is created.')
// // })




//------------------------------------create a second page to import the other pages.-------------------------------------
// remember this points: should be in a correct "file-destination-name" and keywords "require" 

// Import modules
let notes = require('./NOTES.js');
const _ = require('lodash');

console.log('Server is running');

// Use variables and functions from imported modules
let age = notes.age;
console.log(age);

let results = notes.addNumber(12, 13);
console.log(results);

console.log(); // empty line

// Use Lodash to filter an array
let data = ['hari', 12, 'chaudhari', 13, 12, 14, 19, 'coderbhaidsahab', 'jaggie', 14, 'jaggie', 13];
let filter = _.uniq(data);
console.log(filter);



