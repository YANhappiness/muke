
new Promise(
    /*执行器 excutor*/
    function(resolve,reject){
        // 一段消耗很长的一步操作
        resolve() //数据处理完成
        reject() // 数据处理出错
    }
).then(function A(){
    //处理成功时调用
},function B(){
    //处理失败时调用
})

.then() //接受两个函数作为参数，fulfilled和rejected 
.then() // 返回新的Promise实例，所以他是链式调用的
当前面的promise状态改变时，.then()根据其最终状态（fuldilled/rejected）选择特定的状态响应函数执行  
.then() //状态响应函数可以返回新的promise或其值
        //如果返回新的promise，下一级的.then()会在新的Promise状态改变之后执行
        //如果返回其他任何值，则会立即执行下一级.then();

.then()里面有.then()的情况
因为then返回的还是Promise实例
会等里层的then执行完之后再执行外面的
sample/nested-then.js

### test
1.dosth().then(function(){
     return dosthElse();
 })
 //顺序执行
2.dosth().then(function(){  
     dosthElse();
 })
  //在dosth的响应函数里面返回了一个Promise实例，但是没有返回给then的响应函数，看作返回了一个空，下一步会立刻执行dosthElse()

3.dosth().then(dosthElse())
    传入的dosthElse()是一个Promise()实例
    dosth(),和dosthElse()在同一栈中同时执行，
    后续.then()紧随dosth()函数执行之后
4.dosth().then(dosthElse)
    .then()接收两个参数，第一个是fulfilled/rejected。dosthElse相当于传了一个函数

### Promise错误处理
    Promise会自动捕获内部异常，并交给rejected响应处理。
    sample/error.js
    promise执行器里面如果发生错误，promise的状态就会更改为rejected，后面的fulfilled的响应函数就不会执行，后面通过catch捕获错误的函数就会被执行。抛出错误信息。
两种处理方法
    1.reject("error") .then(null,message=>{})
    2.throw new Error("错误信息").catch(message=>{})
    第二种方式可以捕获包括后续.then()里面的错误。

### Promise.all();   /sample/all.js
    1. Promise.all([P1,P2,P3,...])用于多个promise实例，包装成一个新的promise实例
    2. 返回的实例是一个新的，普通的promise实例，接受一个数组作为参数
    3. 数组里可以是一个promise对象，也可以是别的值，只有promise会等待状态改变
    4. 当所有的子promise完成，该promise完成，返回值是全部的数组
    5. 子promise有一个失败，该promise失败，返回值是第一个失败的子promise的结果
    
### Promise.all()和.map()    /sample/map.js

### Promise实现队列
    有时候我们不希望所有动作一起发生，而是按照一定的顺序，逐个进行
    let promise = doSth();
    promise = promise.then(doSthElse)
    promise = promise.then(doSthElse1)
    promise = promise.then(doSthElse2)

    1. forEach() 实现队列
    2. reduce()

### promise.resolve()
    返回一个fulfilled的promise实例，或原始Promise实例
    如果参数为空，就返回一个fulfilled的promise实例