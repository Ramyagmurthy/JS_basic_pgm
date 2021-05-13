const myPromise = new Promise((resolve, reject) => {
    let a=11;

    if(a>10){
        resolve("Promise is resolved")
    }
    else{
        reject("Promise is rejected");
    }
})