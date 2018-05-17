console.log("start");

new Promise(resolve=>{
    setTimeout(() => {
        resolve("hello");
    }, 2000);
}).then(value=>{
    console.log(value);
    console.log("every one");
    (function(){
        return new Promise(resolve=>{
            setTimeout(() => {
                console.log("I am XXX");
                resolve("merry");
            }, 2000);
        });
    })();
    return false;
})

.then(value =>{
    console.log(value + " world");
})
.then(value => {
    console.log(value + " world");
})

// start
// hello
// every one
// false world
// undefined world
// I am XXX

//在promise里面如果不直接返回一个promise实例，会直接进入到下一个环节，即使传递false，也会将false返回下个实例
