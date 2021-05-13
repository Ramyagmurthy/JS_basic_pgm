function missing(arr) {
    let missArray = [];

    //min number is 1 and max number is 6
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);

    //indexOf returns its position, not there push to empty array
    for(let i = minNum; i < maxNum; i++)
    {
        if(arr.indexOf(i) < 0){
            missArray.push(i);
        }
    }
    return missArray;
}

console.log(missing([1,2,3,5,6]))