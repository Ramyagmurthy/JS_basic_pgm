var arr = [1, 2, 3, 4, 5];
    
    // Getting sum of numbers
    var sum = arr.reduce(function(a, b)
    {
        return a + b;
    }, 0);
    
    console.log(sum); // Prints: 15