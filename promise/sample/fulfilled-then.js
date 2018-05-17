console.log("start");

let promise = new Promise(resolve =>{
    setTimeout(() => {
        console.log("the promise fulfilled");
        resolve("hello");
    }, 1000);
})

setTimeout(() => {
    promise.then(value=>{
        console.log(value+" world!");
    })
}, 3000);


// start
// the promise fulfilled
// hello world!

//组成队列之后会按先进先出的顺序执行
//如果没有完成则会顺序完成 
//如果已完成，then则会节后promise返回的值