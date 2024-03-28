// asychronous program

// console.log("Hi how are you shakeel");
// console.log("shakeel");
// function hi(){
//     console.log("Hellow dear shakeel");
//     console.log("two");

// }
// setTimeout(hi, 3000);
// console.log("hi apna college");



// callback : ITS function passed as argument as other function.


// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);


// }
// calculator(10, 20,sum);


// nested callback callbackes hell  its very compelx for any programmer




function getData(setd,getd){
   
    setTimeout(()  =>{
        console.log("Data ", setd);
    if(getd){
        getd();

    }

},1000);
}

getData(1, () =>{

    console.log("This is for the Dear shakeel")
    getData(2, () =>{
        
    console.log("This is for the Dear Ali");
        getData(3, () =>{
            
    console.log("This is for the Dear Ihsan");
            getData(4, () =>{
                console.log("This is for the 4th position");
                getData(5, () =>{
                    console.log("This is for the AQib");

    getData(3);
});
});
});
});
});