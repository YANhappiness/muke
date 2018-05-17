
//使用promise.all(),包装多个promise实例

console.log("let's go");

Promise.all([1,2,3])

.then(all=>{
    console.log("1:",all)
    return Promise.all([function(){
        console.log("ooxx");
    },'xxoo',false]);
})

.then(all=>{
    console.log("2:",all)
    let P1 = new Promise(resolve=>{
        setTimeout(() => {
            resolve("I'\m P1");
        }, 1500);
    });

    let P2 = new Promise(resolve=>{
        setTimeout(() => {
            resolve("I'\m p2")
        }, 1450);
    })

    return Promise.all([P1,P2]);
})  
.then(all=>{
    console.log("all: ",all);
    let p1 = new Promise(resolve=>{
        setTimeout(() => {
            resolve('I\'m p1')
        }, 1500);
    })

    let p2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('I\'m p2')
        }, 3000);
    })

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('I\'m p3')
        }, 1000);
    })

    return Promise.all([p1,p2,p3]);
})

.then(all=>{
    console.log("all: ",all);
})


.catch(err=>{
    console.log("catch err: ",err);
})