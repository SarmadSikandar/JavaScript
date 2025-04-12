const promiseOne = new Promise(function(resolve, reject){

setTimeout(() => {
    // console.log("Async task complete");
    resolve()
}, 1000);
})

promiseOne.then(function(){
    // console.log("promise resolved.");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({user:"sarmad", password:"123"})
        }else{
            reject("Error!")
        }
    }, 1000);
})

async function consume(){
   try{
       const response = await promiseFive;
       console.log(response);
   }
   catch(error){
        console.log(error);
   }
}

consume()