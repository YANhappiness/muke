console.log("start");

new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("bye");
            throw new Error("bye")
        }, 1000);
    })

    .then(value => {
        console.log("resolve message :" + value);
    }, error => {
        console.log("reject message:", error);
    })