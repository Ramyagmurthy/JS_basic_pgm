let arr = [1,2,3,1,2,5];
let newArr = [];

for(let i=0; i< arr.length; i++){
    if(arr.indexOf(i) === -1)
    {
        newArr.push(arr[i]);
    }
}
console.log(newArr);