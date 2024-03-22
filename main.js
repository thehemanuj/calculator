let c=document.querySelector(".c");
let plum=document.querySelector(".plum");
let mod=document.querySelector(".mod");
let divi=document.querySelector(".div");
let s7=document.querySelector(".s7");
let s8=document.querySelector(".s8");
let s9=document.querySelector(".s9");
let mul=document.querySelector(".mul");
let s4=document.querySelector(".s4");
let s5=document.querySelector(".s5");
let s6=document.querySelector(".s6");
let min=document.querySelector(".min");
let add=document.querySelector(".add");
let s0=document.querySelector(".s0");
let dot=document.querySelector(".dot");
let s1=document.querySelector(".s1");
let s2=document.querySelector(".s2");
let s3=document.querySelector(".s3");
let equal=document.querySelector(".equal");
let input=document.querySelector(".line");
let output=document.querySelector(".out");
let any=document.querySelector("#big1");

let o="0",o1="0",flag=0,flag1=0,flag2=0,op="",out="0";

document.body.addEventListener("keydown",function(event){
    if(event.key==="1")
        s1.onclick();
    else if(event.key==="2")
        s2.onclick();
        else if(event.key==="3")
        s3.onclick();
        else if(event.key==="4")
        s4.onclick();
        else if(event.key==="5")
        s5.onclick();
        else if(event.key==="6")
        s6.onclick();
        else if(event.key==="7")
        s7.onclick();
        else if(event.key==="8")
        s8.onclick();
        else if(event.key==="9")
        s9.onclick();
        else if(event.key=="0")
        s0.onclick();
        else if(event.key==="c"||event.key==="C")
        c.onclick();
        else if(event.key==="Enter")
        equal.onclick();
        else if(event.key==="+")
        add.onclick();
        else if(event.key==="-")
        min.onclick();
        else if(event.key==="/")
        divi.onclick();
        else if(event.key==="*")
        mul.onclick();
        else if(event.key==="%")
        mod.onclick();
        else if(event.key=="A"||event.key=="a")
        any.onclick();
        else if(event.key===".")
        dot.onclick();
        else if(event.key==="Shift")
        plum.onclick();
});

c.onclick=()=>{
    o="0";
    o1="0";
    op="";
    out="0";
    input.innerText=o;
    output.innerText=o;
    flag=0;
    flag1=0;
    flag2=0;
}

plum.onclick=()=>{
    if(flag==0){
        o=String(0-Number(o));
        input.innerText=o;
        output.innerText=o;
    }
    else{
        o1=String(0-Number(o1));
        input.innerText=o1;
        output.innerText=o1;
    }
}

mod.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="0";
        else
        o=String(Number(o)/100);
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="1";
        else
        o1=o1+"1";
        o1=String(Number(o1)/100);
        input.innerText=o1;
        output.innerText=o1;
    }
    
}

s1.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="1";
        else
        o=o+"1";
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="1";
        else
        o1=o1+"1";
        input.innerText=o1;
        output.innerText=o1;
    }
}

s2.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="2";
        else
        o=o+"2";
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="2";
        else
        o1=o1+"2";
        input.innerText=o1;
        output.innerText=o1;
    }
}

s3.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="3";
        else
        o=o+"3";
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="3";
        else
        o1=o1+"3";
        input.innerText=o1;
        output.innerText=o1;
    }
}

s4.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="4";
        else
        o=o+"4";
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="4";
        else
        o1=o1+"4";
        input.innerText=o1;
        output.innerText=o1;
    }
}

s5.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="5";
        else
        o=o+"5";
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="5";
        else
        o1=o1+"5";
        input.innerText=o1;
        output.innerText=o1;
    }
}

s6.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="6";
        else
        o=o+"6";
        input.innerText=o;
        output.innerText=o;
    
    }
    else{
        if(o1=="0")
        o1="6";
        else
        o1=o1+"6";
        input.innerText=o1;
        output.innerText=o1;
    }
}

s7.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="7";
        else
        o=o+"7";
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="7";
        else
        o1=o1+"7";
        input.innerText=o1;
        output.innerText=o1;
    }
}

s8.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="8";
        else
        o=o+"8";
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="8";
        else
        o1=o1+"8";
        input.innerText=o1;
        output.innerText=o1;
    }
}

s9.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="9";
        else
        o=o+"9";
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="9";
        else
        o1=o1+"9";
        input.innerText=o1;
        output.innerText=o1;
    }
}

s0.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o="0";
        else
        o=o+"0";
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1="0";
        else
        o1=o1+"0";
        input.innerText=o1;
        output.innerText=o1;
    }
}

divi.onclick=()=>{
    if(op==""){
        flag=(flag+1)%2;
    }
    op="/";
    input.innerText="0";
    output.innerText="0";
}

mul.onclick=()=>{
    if(op==""){
        flag=(flag+1)%2;
    }
    op="x";
    input.innerText="0";
    output.innerText="0";
}

add.onclick=()=>{

    if(op==""){
        flag=(flag+1)%2;
    }
    op="+";
    input.innerText="0";
    output.innerText="0";
}

min.onclick=()=>{

    if(op==""){
        flag=(flag+1)%2;
    }
    op="-";
    input.innerText="0";
    output.innerText="0";
}

dot.onclick=()=>{
    if(flag==0){
        if(flag1==0){
            if(o=="0")
                o="0.";
            else
                o=o+".";
            input.innerText=o;
            flag1=(flag1+1)%2;
        }
    }
    else{
        if(flag2==0){
            if(o1=="0")
                o1="0";
            else
                o1=o1+"0";
            input.innerText=o1;
            flag2=(flag2+1)%2;
        }
    }
}

equal.onclick=()=>{
    if(o1=="0"){
        display(o);
    }
    else{
        input.innerText=o+op+o1;
        calculate();
    }
}

function display(outp){
    out="0";
    input.innerText=outp;
    output.innerText=out;
}


any.onclick=()=>{
    if(flag==0){
        if(o=="0")
        o=String(parseInt(Math.random()*100));
        else
        o=o+String(parseInt(Math.random()*100));
        input.innerText=o;
        output.innerText=o;
    }
    else{
        if(o1=="0")
        o1=String(parseInt(Math.random()*100));
        else
        o1=o1+String(parseInt(Math.random()*100));
        input.innerText=o1;
        output.innerText=o1;
    }
}


function calculate(){
    if(op=="/"){
        out=String(Number(o)/Number(o1));
        output.innerText=out;
        o=out;
        o1="0";
    }
    else if(op=="+"){
        out=String(Number(o)+Number(o1));
        output.innerText=out;
        o=out;
        o1="0";
    }
    else if(op=="-"){
        out=String(Number(o)-Number(o1));
        output.innerText=out;
        o=out;
        o1="0";
    }
    else if(op=="x"){
        out=String(Number(o)*Number(o1));
        output.innerText=out;
        o=out;
        o1="0";
    }
}