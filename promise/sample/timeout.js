
console.log("let's go");

new Promise(resolve => {
    setTimeout(() => {
        resolve("world");
    }, 2000);
}).then(value =>{
    console.log("hello"+value)
},errMsg =>{
    console.log(errMsg)
})