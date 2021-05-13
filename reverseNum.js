function reversed(num){
    
    var a = num.toString().split('').reverse().join('');
    return parseInt(a) * Math.sign(num); 
    //Math.sign func multiplies by -1 when - values
    //multiplies by 1 when positive values
}

var result = reversed(-568);
console.log(result);
//console.log(reversed(-568))