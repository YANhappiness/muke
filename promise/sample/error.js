console.log("start");

new Promise(resolve =>{
    setTimeout(() => {
        throw new Error("bye");
    }, 1000);
})
.then(value=>{
    console.log(vaule+" world");
})

.catch(error=>{
    console.log("Error:",error.message);
});