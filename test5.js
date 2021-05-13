var a = [1, 2, 3, 5, 7];
var b = [];

for(var i=1;i<a.length;i++)
{
    if(a[i] - a[i-1]!=1){
        var x= a[i]-a[i-1];
        var j=1;
        while(j<x)
        {
            b.push(a[i-1]+j);
            j++
        }
    }
}
console.log(b);