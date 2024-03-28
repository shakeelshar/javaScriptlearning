function api(){
return new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        console.log("data");
         reject(200);
    },4000);
});

}
async function shar(){
    await api();
    await api();
}