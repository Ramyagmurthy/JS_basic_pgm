let arr= [1,2,4,5,6,7,8,9,10];
let n = arr.length;
let miss = getMissingNo(arr,n);
console.log(miss);

function getMissingNo(a,n){
    let total = Math.floor((n+1) * (n+2)/2);
    for(let i=0; i< n; i++)
    total -= a[i];
    return total;
}