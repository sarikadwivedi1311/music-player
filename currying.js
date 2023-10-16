function sum(a,b,c){
    return a+b+c
}
var z= sum(2,3,4)
console.log(z)

return function(a) {
return function(b){
return function(c){
    return a+b+c;
}
}
}