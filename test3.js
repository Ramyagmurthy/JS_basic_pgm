var addSix = createBase(6);
addSix(10)
function createBase(baseNumber){
    return function(N){
        return baseNumber + N
    }
}



function OuterFunction(){
    var a=100;

    function InnerFunction() {
        alert(a);
    }
    return InnerFunction;
}

var innerFunc = OuterFunction();

innerFunc(); //100