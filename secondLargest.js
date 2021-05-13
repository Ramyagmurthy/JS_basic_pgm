function secondLargest(arr) {
    let fLarNum = (secLarNum = Math.min(...arr));

    for(let i=0; i< arr.length; i++){
        if( arr[i] > fLarNum){
            secLarNum = fLarNum;
            fLarNum = arr[i];      
        } else if(arr[i] > secLarNum && arr[i] !== fLarNum) {
        secLarNum = arr[i]
    }
}
return secLarNum;
}
console.log(secondLargest([10,20,30,40,50]));