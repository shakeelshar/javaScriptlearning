const URL="https://cat-fact.herokuapp.com/facts";
const getFct=document.querySelector("#fact");
const getF=document.querySelector("#btn");

const get= async () =>{
    console.log("Get Data....");

    let response =await fetch(URL);
    console.log(response);
    let data= await response.json();
    getFct.innerText =data[0].text;
};
getF.addEventListener("click",get);
//console.log(promise);