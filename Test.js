//Arrow Function.
// let fa9 = (x)=>x*2;
// console.log(fa9(10));

//Scope Local&Global
// var x=10;
// if(10===10){
//     var x=20;
// }
// console.log(x); 

// Higher Order Function -Map
// let Array=[1,2,3,4,5,6];
// let fa9= Array.map(function(ele,ind,arr){
//     return ele*2;
// })
// console.log(fa9);

// Higher Order Function -Filter
// let Arsenal =[Saka,saliba,Rice];
// let FA9=Arsenal.filter(function(ele){
//     return ele.startWith("S");
// });
// console.log(FA9);

// Higher Order Function -Reduce
// let nums=[10,20,30,5];
// let fa9=nums.reduce(function(ele,cur,ind){
//     return ele+cur;
// })
// console.log(fa9);

//Objects
// let fa9={
//     theName:"Fekry",
//     theAge:21,
//     sayHello:function()
//     {
//         console.log('Hello');
//     }
// };
// console.log(fa9.sayHello());
//Object with new
// let fa9=new Object({
//     age:21,
//     name:"Fekry",
//     address:"zagazig"
// });
// fa9.age=30;
// console.log(fa9.age);

//Create Object with "create" Method
// let fa9=new Object({
//     name:"fekry",
//     age:21,
//     doubleAge:function()
//     {
//         return this.age*2;
//     }
// });
// let obj=Object.create(fa9);
// obj.age=12;
// console.log(obj.doubleAge());

//getElementById
let fa1=document.getElementById("id");
fa1.style.color="red";

//getElementByTagName
let fa2=document.getElementsByTagName('div');
fa2[0].style.color="blue";

//getElementsByClassName
let fa3=document.getElementsByClassName("getElementsByClassName");
fa3[0].style.color="yellow";

//querySelector
let fa4=document.querySelector(".querySelector");
fa4.style.color="green";

//querySelectorAll
let fa5 = document.querySelectorAll(".querySelectorAll");
fa5[0].style.color="brown";
fa5[1].style.color="brown";
fa5[2].style.color="brown";

//Get Elements Content & Attributes.
let fa6=document.querySelector('#id');
fa6.innerHTML='New InnerHTML';
//Text content.
fa6.textContent="New textContent";

// DOM Events
let fa7 = document.getElementById('btn');
fa7.onclick=function(){
    if(fa7.style.backgroundColor!="green"){
        fa7.style.backgroundColor="green";
        if(fa8.value===''){
            console.log('please enter your name!');
        }else{
            console.log(`hi ${fa8.value}`);
        }
    }else{
        fa7.style.backgroundColor="white";
        fa8.value='';
    }
    if(fa7.style.backgroundColor=="green")
    {
        this.innerText='replay';
    }else{
        this.innerText='Click Me';
    }
};

let fa8 = document.getElementById('inp');
fa8.onfocus=function(){
    fa8.style.borderColor='blue';
    this.placeholder="Enter your name :";
};
window.onload=function(){
    fa8.focus();
}

let fa9=document.querySelector('body');
fa9.style.cssText="background-color: lightblue;";

// fa9.style.removeProperty("background-color");/
let fa10=document.createElement('hr');
fa4.before(fa10);
fa10.remove();

//Class List Object & Methods.
//onblure
let fali = document.querySelector(".inp2");
fali.onblur=function(){
    document.links[0].click();
};
//add & remove & toggle Class.
//add
// fali.classList.add("ff");
// fali.classList.remove("ff");
// fali.classList.toggle("ff");

//Css style & styleSheets.
let lik=document.querySelector('.inp2');
lik.style.cssText="display:block;margin-top:10px";
// lik.style.setProperty("margin-left:20px");
// lik.style.removeProperty("margin-top");

//Cloning
let faClone=document.querySelector("#id").cloneNode(true);
let MyDiv=document.querySelector('.div1');
MyDiv.appendChild(faClone);
// faClone.id=`${faClone.id}-2`;
faClone.innerText="Cloned Div";

//add EventListener.
// window.onload=function(){
//     lik.focus();
// }

//BOM 
//Alert, Confirm & Prompt.
// window.alert("احذر");
// window.confirm("Are you well?");
// window.prompt("Enter your name:","fekry");


//setTimeOut & ClearTimeOut.
//setTimeOut.
let name=window.prompt("Enter your name: ");
function theName(name){
    if(name===""||name===null){
        console.log(`no name ${name}`);
    }else{
        console.log(`hi ${name}`);
    }
};
let stp =setTimeout(theName,3000,name);
//clearTimeOut
let ptn =document.querySelector(".stop");
ptn.onclick=function(){
    clearTimeout(stp);
    // this.style.backgroundColor="red";
};


//setInterval & clearInterval.
//setInterval.
let rept=function(){
    console.log("again!");
};
let cinter=setInterval(rept,1000);

//clearInterval.
let stpinterval=document.querySelector(".stopInterval");
stpinterval.onclick=function(){
    clearInterval(cinter);
};

//Scroll, ScrollTo, ScrollBy, Focus, Print, Stop.
//Focus.
let fa11=document.querySelector(".scrl");
fa11.onclick=function(){
    window.focus();
};

//Destructuring Arrays.
// let myfrinds =["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
// let [,,,[a,,[,b]]]=myfrinds;

// console.log(a);
// console.log(b);
// console.log(myfrinds[3][2][1]);

//Destructuring Objects.
// const Ars={
//     theN:"Arsenal",
//     theManager:"Arteta",
//     theCaptin:"Odegaard",
// };

// const{theN,theManager, theCaptin}=Ars;
// console.log(theN);

// //Destructuring Parameters.

// show(Ars);
// function show({theN,theManager,theCaptin}= Ars){
//     console.log(`the name is ${Ars.theN}`);
//     console.log(`the Manager is ${Ars.theManager}`);
// }
