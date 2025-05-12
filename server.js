// const http  = require('http');


// const frist = require('./module');
// frist();

// const fs = require('fs');
// const readfile = fs.writeFileSync('newfile','hellllloooooooooiiiiiiii')



// const fs = require('fs');
// const readfile = fs.writeFile('newwww','helllanmd;nsajcbw',(error)=>{
//     if(error)throw error
//     console.log("file written");
    
// })

// const fs = require('fs');

// const read = fs.readFile('dew.txt','utf-8',(error,data)=>{
//     if(error){
//         console.error(error);
//     } 
//     console.log(data)
// })
// const fs = require('fs');

// const read = fs.readFile("dew.")


// <--------event emitter-------->

// const event  =  require('events');
// const myevent = new event();

// myevent.on('greet',()=>{
//     console.log('created the emit')
// });

// myevent.emit('greet')


// const  myevent = new event();
// myevent.on('greet',(name)=>{
//     console.log(`hello ${name}`)
// })

// myevent.emit('greet','achu')

// const event =require('events')
// const myEvent = new event();

// myEvent.on('greet',()=>{
//     console.log('hello this is great');
    
// })
// myEvent.emit('greet')



// http.createServer((req,res)=>{
//     res.write("hello");                 
//     res.end()
// }).listen(3000,()=>console.log("created"));

// <---------read stream----->

// const fs = require('fs')

// const readstream = fs.createReadStream('newfile.txt',{encoding:'utf-8'});

// readstream.on( 'data',(chunk)=>{
//     console.log('data recieved:\n',chunk)
// });


// <---------write stream--------------->

// const fs = require('fs');
// const writestream = fs.createWriteStream('content.txt');

// writestream.write("ennaaaaaaa unddddddd\n");
// writestream.write("sughamanoooooo");
// writestream.end();
// console.log("data writted sucessfully")


// <-------------duplex stream->>>>
/// pipe\\\

// const fs = require('fs');
// const readstream=fs.createReadStream('newfile.txt');
// const writestream = fs.createWriteStream('newfile.txt')

// writestream.pipe(readstream)

// console.log("finished")

// const fs = require('fs')

//   fs.writeFileSync('promise.txt','promsie file ivdnvndiibv w uiijdv dknsdiv ndvbud kdjbudksd budd vl,dbyvu v bujv d uvduv dvv hudvvdujv d vjdbvudj vnduv jdvouhvj dvouvj dyuv dhv jdivjuvj vjuhvjsddu jsdh vsv ')

// setTimeout(() => {
//     let promise =new Promise((resolve,reject)=>{
//         let succes = true;
//         if(succes){
//                console.log('write')
//         }else{
//             console.log("file is note work",error)
//         }
//     });
//     promise.then((result)=>res(write))
//     .catch((error)=>console.log("error ",error))
// },3000);

{/* <eopm></eopm> */}

// let fs=require('fs')
// let promise=new Promise((resolve,reject)=>{

//     let arr=[1,2,3,4,5,6]

//     for(let i=0;i<arr.length;i++){
//     if(String(arr[i]).includes(6)){

//         let write=fs.writeFileSync('text.txt',`${arr[i]}`)
//         let read=fs.readFileSync('text.txt','utf-8')

//         resolve("number foounded: "+read)
//     }
// }

// })

// promise

// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })


// let fs = require('fs');
// let promise = new Promise((resolve,reject)=>{
//     let arr=[1,2,3,4,5,6]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].toString().includes(2)){
//             let write = fs.writeFileSync('write.txt',`${arr[i]}`)
//             let read = fs.readFileSync('write.txt','utf-8')

//             resolve('number founded :'+read)
//         }
//     }
// })

// promise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
// console.log(error)
// })


// let fs = require('fs');
// <-----------------using promise to find the secsmallest and write and read the file---------->
// let fs = require('fs');

// let promise = new Promise((resolve,reject)=>{
//     let arr = [1,2,3,4,5,6];
    
//     let secsmallest=arr.sort((a,b)=>a-b)[1];
//     // console.log(secsmallest)
//     if (secsmallest){
//         resolve(secsmallest)
//         fs.writeFileSync('secr.txt',`${secsmallest}`)
//     let read = fs.readFileSync('secr.txt',{encoding:'utf-8'})
        
//     }
//     else{
//         reject('you got error')
//     }
      
// });

// promise
// .then((result)=>console.log('message:',result))
// .catch((err)=>console.error('err'))


// <-----------using promise to read  a file and cout the words---------------->
// const fs = require('fs');


// let promise = new Promise((resolve,reject)=>{
//     let count = 0;
//     let read = fs.readFileSync('newfile.txt',{encoding:'utf-8'});
// console.log(read)
// let arr = read.split(' ');
// for(let i=0; i<arr.length; i++){
//     count++;
// }
//     if(count){
//         resolve(count)
//         // let write = fs.writeFileSync('newwrite.txt',` words count : ${count}`)
//         let update = fs.appendFileSync('newfile.txt',`\nword count is ${count}`)
//     }else{
//         console.log("you  got error :")
//     }
// })
// promise
// .then((result)=>console.log("successs",result))
// .catch((error)=>console.log("error is ",error))


// <------------------is palindrome------------------>
// const fs = require('fs');



// let promise = new Promise((resolve,reject)=>{
//     let read = fs.readFileSync('newfile.txt','utf-8');
//     console.log(read)
// let palin = read.split('').reverse().join('')



//     if(read===palin){
//         resolve(palin)
//         fs.writeFileSync('filem.txt',`this is palindrome ${palin}`)

//     }else{
//     reject(error)
//     fs.writeFileSync('filem.txt',`this is not a palindrome ${read}`)
//     }
// })

// promise
// .then((result)=>console.log("is Palindrome ",result))
// .catch((error)=>console.log("is not palindrome "))

// <------------------------------------------------------------->

// reverse a file 

// const fs = require('fs');
// const { resolve } = require('path');

// let promise = new Promise((res,rej)=>{

//     let read = fs.readFileSync('newfile.txt','utf-8');

//     let rev = read.split('').reverse().join('')
//     console.log(read)
  
//         if(rev){
//             res(rev)
//             fs.appendFileSync('newfile.txt',`   ${rev}`)
//         }else{
//             rej(eroor)
//         }
// })
// promise
// .then((succes)=>console.log("sucess"))
// .catch((error)=>console.log("eroor happened"))



// let fs=require('fs')
// let promise=new Promise((resolve,reject)=>{

//     let arr=[1,2,3,4,5,6]

//     for(let i=0;i<arr.length;i++){
//     if(arr[i]===6){

//         let write=fs.writeFileSync('text.txt',`${arr[i]}`)
//         let read=fs.readFileSync('text.txt','utf-8')

//         resolve("number foounded: "+read)
//     }
// }

// })

// promise

// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })



