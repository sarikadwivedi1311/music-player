var box_I=document.getElementById('inner')
var box_O=document.getElementById('outer')


box_I.addEventListener('click',function(event){
    event.stopPropagation()
    console.log("Inner Box Click")
    
})

box_O.addEventListener('click',function(event){
    event.stopPropagation()
    console.log("Outer Box Click")
})

document.addEventListener('click', function(){
    console.log("Click outer from box")
})