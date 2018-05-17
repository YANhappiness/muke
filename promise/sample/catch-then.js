console.log("let's go");

new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve();
    }, 1000);
})

.then(()=>{
    console.log("start");
    throw new Error("test Error");
})

.catch(err=>{ //catch同样会返回promise实例，并且没有错误,返回状态为fulfilled
    console.log("catch Error: ",err);

    throw new Error("anther error")//promise状态转换为rejected，后面的fufilled不会执行
})

.then(()=>{
    console.log("arrive here");
})

.then(()=>{
    console.log("... and here")
})

.catch(err =>{
    console.log("No , icatch",err)
})

