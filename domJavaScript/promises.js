// promises mantain the readability of code   and these uses instead of the callback hell


// let pro=new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     reject("It has been  rejected due to some errors");l

// });



// function data(get, set){
//     return new Promise((resolve, reject) => {


//         setTimeout( () =>{

//     console.log("data", get);

//     resolve("Successfull")

//           if(set){
//             set();
//           }
//         },3000);
//     })
// }



// now we can learn how promises use in the programming languages 


// const getPro =() =>{


//    return new Promise((resolve, reject) => {
//         console.log("I am promise ");

//         // resolve("Success");
//         reject("some error");
//     });
// };

// let promise= getPro();
// promise.then( (res)=>{

// console.log("Successfull",res);

// });
// promise.catch( (err)=>{

//     console.log("rejected",err);
// }) ;   


// Asynac  await function.

function asynacfun1() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {


            console.log("This is data 1");
            resolve(" result was  Successfully Return");
        }, 5000);
    });
}


function asynacfun2() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("This is data 1");
            resolve(" result was Successfully Return");
        }, 5000);
    });
}
console.log("Fecting the data from data 1");
let p1 = asynacfun1();
p1.then((res) => {
    //console.log(res);

    console.log("Fetching Data2....");


    let p2 = asynacfun2();
    p2.then((res) => {

        //console.log(res)

    });


});


