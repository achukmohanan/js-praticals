// // -------------- sum using callback------------>
// function main(a,b,callback){
//   let result = callback(a,b);
//   console.log("result is ",result)
    
// }

// function sum(x,y){
//     return x+y;
// } 

// main(2,3,sum)

// let a ="Work";
// console.log(a[-2])


// finding the largest number
// function main(a,b,greater){
//     let result = greater(a,b)
//     console.log('result is ',result);

// }

// function greater(x,y){
//     return x>y?x:y
// }

// main(3,4,greater)

// find the largest string 

// for loop

// let a = "Mathematics is a good subject"

// let ar = a.split(' ')
// // console.log(ar);
// let largest = 0;

// for(let i=0; i<ar.length; i++){
//     if(ar[i].length>largest){
//         largest = ar[i].length
        
//     }
// }
// console.log(largest)

// using reduce 

// let a = "Mathematics is a good subject"
// let largest = a.split(" ").reduce((acc,curr)=>{
//     if(acc < curr.length){
//         acc = curr.length;
//     }
//     return acc
// },0)
// console.log(largest)

// find the 2nd largest number in an array using reduce

// let array = [1,2,3,4,5,6,4,3,2,2]

// let {largest ,seclargest } = array.reduce((acc,curr)=>{
//     if(curr > acc.largest){
//         acc.seclargest = acc.largest
//         acc.largest = curr   
//     }else if(curr>acc.seclargest && curr<acc.largest){
//         acc.seclargest = curr;
//     }
//     return acc;
// },{largest:-Infinity,seclargest:-Infinity})

// console.log(seclargest)

// find the dulpicate number from this array

// let array = [1,2,7,3,3,4,1,2,3];
// let a = []
// for(let i=0; i<array.length; i++){
//     let count = 0;
//     for(let j=0; j<array.length; j++){
//         if(array[i] == array[j] ){
//            count++;
            
//         }
//     }
//    if(count>1 && !a.includes(array[i])){
    
//         a.push(array[i]);
//         // console.log(array[i])
//     }
    
// }
// console.log(a)

// // a sentence it have "Javascript" which has not full stop in the end  put full stop 
// let name = 'Javascript';

// let a = name.split('');

// for(let i=0; i<a.length; i++){
//     if(a[i]!=='.'){
//         a.push('.')
//         break;
//     }
    
// }
// console.log(a.join(''))

// let name = 'Javascript';

// let a = name.split('');
// for(let i=0; i<a.length/2; i++){
//         let temp = a[a.length -1-i];
//         a[a.length -1-i] = a[i]
//         a[i] = temp

// }


// console.log(a.join(''))

// let i =1;

// while(i<=10){
//     console.log(i++)
// }

// let Obj = {
//     a:10,
//     b:20,
//     c:30
// }

// let sum = 0;

// for(let key in Obj){
//    sum+=Obj[key]
// }
// console.log(sum)

    // let a =[1,2,3,435,5,64,4,122,141,2,4]
    // let largest=0
    // let seclargest = 0;
    // for(let i=0; i<a.length; i++){
    //     if(a[i]>largest){
    //         seclargest = largest;
    //         largest+=a[i]
        
    //     }else if(a[i]>seclargest &&  a[i]<largest){
    //         seclargest = a[i]
    //     }
    
    // }
    // console.log(largest)
    // console.log(seclargest)

// <-------sort Array without method--------->

// let arr =[1,2,3,435,5,64,4,122,141,2,4]
// let arr1 = [];
// let largest = 0;
// for(let i=0; i<arr.length; i++){
//         if(arr[i] > largest || arr[i] < largest){            
//             largest = arr[i]
//             arr1.push(largest)
          
        
//     }
   
// }
// console.log(arr1)

// <----------reverse a array using while loop-------->

// let array = [1,2,3,4,5]

// let i=0;
// while(i<array.length/2){
//     temp = array[i]
//    array[i] = array[array.length-1-i]
//    array[array.length-1-i] = temp;
//    i++;
   
// }
// console.log(array)


// // promise1.all

// let promise1 = new Promise ((resolve,reject)=>{
//     resolve(1)
// })
// let promise2 = new Promise ((resolve,reject)=>{
//     resolve(2)
// })
// let promise3 = new Promise ((resolve,reject)=>{
//     resolve(4)
// }
// )
// let promise4 = new Promise ((resolve,reject)=>{
//     resolve(3)
// })
 
// Promise.all([promise1,promise2,promise3,promise4])
// .then((result)=>{
//     let sum = result.reduce((acc,curr)=>acc+curr,0)
//     console.log("all promise is resolved",sum)
// })

// .catch((error)=>console.log("error "))

// < ----------- promise.allsettled---->


// let promise1 = new Promise ((resolve,reject)=>{
//     resolve(1)
// })
// let promise2 = new Promise ((resolve,reject)=>{
//     resolve(2)
// })
// let promise3 = new Promise ((resolve,reject)=>{
//     reject(4)
// }
// )
// let promise4 = new Promise ((resolve,reject)=>{
//     resolve(3)
// })

// Promise.allSettled([promise1,promise2,promise3,promise4])
// .then((result)=>{
//     let sum = result.filter((num)=>num.status==="fulfilled")
//     .reduce((acc,curr)=>acc+curr.value,0)

//     console.log(sum)
// })
// .catch((error)=>console.log("eroor happed "))



{/* <promise .race></promise .race> */}



// let promise1 = new Promise ((resolve,reject)=>{
//     reject(1)
// })
// let promise2 = new Promise ((resolve,reject)=>{
//     resolve(2)
// })
// let promise3 = new Promise ((resolve,reject)=>{
//     reject(4)
// }
// )
// let promise4 = new Promise ((resolve,reject)=>{
//     resolve(3)
// })

// Promise.race([promise1,promise2,promise3,promise4])
// .then((result)=>console.log("the frist fastest promise  ",result)
// )

// .catch((error)=>console.log("error"))
// )

// promise any

//     let promise1 = new Promise ((resolve,reject)=>{
//         reject(1)
//     })
//     let promise2 = new Promise ((resolve,reject)=>{
//         resolve(2)
//     })
//     let promise3 = new Promise ((resolve,reject)=>{
//         reject(4)
//     }
//     )
//     let promise4 = new Promise ((resolve,reject)=>{
//         resolve(3)
//     })

// Promise.any([promise1,promise2,promise3,promise4])
// .then((result)=>console.log("fulfilled ",result))
// .catch((error)=>console.log("error"))

// function createCounter(){
//     let count = 0
//     return function(){
//         count++
//         console.log(count);
//     }
// }
// const counter = createCounter()
// counter()
// counter()


// multiple each element of array by 2;


// let str = "Achu"

// let name = str.split('');
// for(let i=0; i<name.length; i++){
//     if(name[i]!== ".")
//         name.push(".")
//     break;
// }
// console.log(name.join(''))

// remove even numbers in an array

// let arr = [1,12,3,4,5,68,7,88,9,10];

// for(let i =0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         arr.splice(i,1)
//     }
// }
// console.log(arr)

// remove the even keys in Obj

// let Obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     f:6,
//     g:7,
//     h:8,
//     i:9,
//     j:10
// }

// for(let key in Obj){
//     if(Obj[key]%2==0){
//         delete Obj[key]
//     }
// }
// console.log(Obj)

// find the freqeuncy of elements 

// let arr = [1,1,2,2,3,4,4,5,6,7,8];

// let a = {}
// let count = 0;
// for(let i=0; i<arr.length; i++){
//     let num=arr[i]
//     if(a[num]){
//         a[num]++;
//     }else{
//         a[num]=1
//     }
// }
// console.log(a)

// timer 10 to 0 0 akumbol stop cheyanam without set timeout

// let k = 10;

// let v = setInterval(() => {
//     console.log(v)
//     k++;
// },1000);

// if(k===0){
//     clearInterval(v)
// }

// oru array with +ve and -ve  numbers  athinte opposite akuka 

// let arr = [-1,2,-3,4];

// let arr = [32,]
// delete even keys in the Object
// let Obj = {
//     key1: 11,  // odd
//     key2: 12,  // even
//     key3: 13,  // odd
//     key4: 14,  // even
//     key5: 15,  // odd
//     key6: 16,  // even
//     key7: 17,  // odd
//     key8: 18,  // 
//     key9: 19, 
//     key10: 20 

// }

// for(let key in Obj){

//     if(Obj[key]%2==0){
//         delete(Obj[key]);
//     }
   
// }
//  console.log(Obj)

// object desturcting

// const student = {
//     name: "Achu",
//     age: 21,
//     course: "Web Development",
//     contact: {
//       email: "achu@example.com",
//       phone: "1234567890"
//     }
//   };
  
//   let {name,course} = student
// //   console.log(contact:{email})

// let {email} = student.contact
// console.log(email)
// console.log(course)

// ---------------------------------------------------
//  find the avg of even number


//  let  arr = [1,2,3,4,5,6,7,8,9,10]
// let sum=0;
// let avg=0
// let count=0;
//  for(let i=0;i<arr.length; i++){
//     if(arr[i]%2==0){
//         sum+=arr[i];
//         count++;
//     }
    
   
//  }
//  avg=(sum/count)
//  console.log(avg)

// prime Num
// ber;

// let arr = [1,2,3,4,5,6,7,8,9,10,11]

// for(let i=0; i<arr.length; i++){
//     let isPrime = true;
//     if(arr[i]<=1){
//         isPrime = false;
    
//     }for(let j=2; j<=arr[i]/2; j++){
//         if(arr[i]%j===0){
//             isPrime = false;
//         }
//     }
//     if(isPrime){
//         console.log(arr[i])
//     }
// }
// frist letter capital akanam

// let str = "achu";

//  let name = [...str.charAt(0).toUpperCase()]
// console.log(name)

// let str = "achu";
// let name = str.split('');
// for(let i=0; i<name.length; i++ ){
//     name[i] = name[i].toUpperCase();
//     break;
// }
// console.log(name.join(''))


// let str = "achu";

// 3. Count number of vowels

// let name = "achu is a good boy"
// // count the vowels in the string
// let vowels = ['a','e','i','o','u'];

// let arr = name.split('');
// let count = 0;
// for(let i=0; i<arr.length; i++){
//     if(vowels.includes(arr[i])){
//         count++;
//     }
//     if(count){
        
//     }
// }

// console.log(count) 
// let name = "achu is a good boy"
// let vowels = ['a','e','i','o','u'];
// let count = 0;
// for(let i=0;i<name.length;i++){
//     if(vowels.includes(name[i])){
//         count++
//     }
// }
// console.log(count);

// let array = [1,-2,-3,null,8,"3",undefined,'6',-2,4]

// let sum = 0;

// for(let i=0; i<array.length; i++){
//     if(typeof array[i]==='number' && array[i]>0){
//         sum+=array[i];
//     }
// }

// console.log(sum)


// let array = [1, -2, -3, null, 8, "3", undefined, '6', -2, ()=>{}, 4];

// for(let i=0; i<array.length; i++){
//     if(typeof array[i]==='function'){
//         console.log(array[i].toString())
//     }
//     if(typeof array[i]==='string'){
//         console.log(array[i])
//     }

//     }

// let arr = [{a:1}, {b:2}, {c:3},{d:3},{e:5},{f:2},{g:4}]

// let sum = 0;

// for(let key of arr){
//     // console.log(key)
//    for(let k in key ){
//    if(key[k]%2==0){
//     sum+=key[k]
//    }
//    }
// }
// console.log(sum)
// remove the duplicates using for loop

//let arr = [1, 1, 2, 2, 3, 3, 3, 4, 6, 5];

// for(let i=0; i<arr.length; i++){
//     let duplicate = true;
//     for(let j=0; j<arr.length; j++){
//         if(arr[i]===arr[j] && i!=j){
//            duplicate=false;
//            arr.splice(i,1)
//         }
//     }
    
// }
// console.log(arr)

// let arr = [1, 1, 2, 2, 3, 3, 3, 4, 6, 5];

// for(let i=0;i<arr.length;i++){
//       let count=0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             count++
         
//         }
//     }
//     if(count==1){
//         console.log(arr[i])
//     }

 
// }  

// function* name(){
//     let i =1;
// while(i<10){
//     if(i%2==1){
//     yield i;}
//     i++;
// }
// }

// let a = name();
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);


// remove duplicates using filter 

// let arr = [1, 1, 2, 2, 3, 3, 3, 4, 6, 5];


// find the sum using reduce

const Obj = [{product : 'CPU',price:1000},{product : 'UPS' , price:2000}]

let sum = Obj.reduce((acc,curr)=>{
        acc+=curr.price;
        return acc;
},0)

console.log(sum)    