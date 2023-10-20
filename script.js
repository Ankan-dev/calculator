let first=0;
let second=0;
let flag=0;

//display function

let dis=(val)=>{
    let btn=document.querySelector("#entry");
    if(flag==0){
        first=(first*10)+val;
        btn.innerHTML=first;
        btn.style.fontSize="48px"; 
        console.log(first)
    }else{
        second=(second*10)+val;
        btn.innerHTML=second;
        btn.style.fontSize="48px"; 
    }
}

//operation
var operation;
let op=(sign)=>{
    event.preventDefault();
    let opr=document.querySelector("#opr");
    if(flag==0){
        operation=sign;
        var result=first+sign;
        opr.innerHTML=result;
        opr.style.display="block";
        document.querySelector("#entry").innerHTML=0;
        document.querySelector("#entry").style.fontSize="48px";
        flag++;
    }else{
        var result=calc()+sign;
        opr.innerHTML=result;
        document.querySelector("#entry").innerHTML=0;
        document.querySelector("#entry").style.fontSize="48px";
        console.log(result);
    }
}

//calculations

let calc=()=>{

    let res=0;
    if(operation=='+'){
        res=first+second;
    }
    else if(operation=='-'){
        res=first-second;
    }
    else if(operation=='*'){
        res=first*second;
    }
    else{
        if(second==0)
            return "Error";
        else{
            res=first/second;
        }
    }
    return res;
}

//equals

let equals=()=>{
    let rslt=calc();
    document.querySelector("#entry").innerHTML=rslt;
    document.querySelector("#opr").style.display="none";

}

//backspace

let back=()=>{
   if(flag==0){
        first=Math.floor(first/10);
        document.querySelector("#entry").innerHTML=first;
   } 
   else{
    second=Math.floor(second/10);
    document.querySelector("#entry").innerHTML=second;
   }
}