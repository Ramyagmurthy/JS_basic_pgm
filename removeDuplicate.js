let arr = [1,2,3,4,2,3,1,2,3,4];

let newArr = [];

for(let i=0; i< arr.length; i++){
    if(newArr.indexOf(arr[i]) === -1){
        newArr.push(arr[i]);
    }
}

console.log(newArr);