console.log("let's go");

new Promise(resolve => {
    setTimeout(() => {
        resolve("hello");
    }, 2000);
}).then(value => {
    console.log(value);
    return new Promise(
        resolve => {
            setTimeout(() => {
                resolve("world");
            }, 3000);
        }
    )
}).then(value => {
    console.log(value + " world");
})


// let's go   
// hello            2
// world world      3
//2,3同时输出