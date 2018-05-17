console.log("start");

Promise.resolve()
    .then((value)=>{
        console.log("step 1",value);
        return Promise.resolve("hello");
    })
    .then(value=>{
        console.log(value+" world")
        return Promise.resolve(new Promise(resolve=>{
            setTimeout(() => {
                resolve("Good");
            }, 1000);
        }))
    })
    .then(value=>{
        console.log(value+"evening");
        return Promise.resolve({
            then(){
                console.log(",everyone") 
            }
        })
    })