// let sum = 0;

// function first (a) {
//     sum += a;
// }

// function second (a) {
//     sum += a;
// }

// first(8);
// second(10);
// console.log(sum)



let word="get element by id"; 
let value=[];

for(let i =0; i<word.length; i++){
    value.push(word[i]);
}

for(let  i=0; i<value.length; i++){
    if(i=0){
        value[i]=value[i].toUpperCase();
    }
    if(value[i]==" "){
        value[i+1]=value[i+1].toUpperCase();
    }
}


console.log('value');