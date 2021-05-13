function primeFactorsTo(max)
{
    var num  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!num [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                num[j] = true;
            }
        }
    }
    return primes;
}

console.log(primeFactorsTo(5));

console.log(primeFactorsTo(100));