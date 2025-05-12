let word="get element by id"; 
let value=[];

for(let i =0; i<word.length; i++){
    value[value.length]=word[i];
}

for(let  j=0; j<value.length; j++){
    if(j===0)
    {
        value[j]=value[j].toUpperCase();
    }
    if(value[j]===" ")
    {
        value[j+1]=value[j+1].toUpperCase();
    }
}
let join = ""
for(let k=0; k<value.length; k++){
    join+=value[k]
}

console.log(join);