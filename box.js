var box_s=document.getElementById('box')
var clickCount=document.getElementById('count')
var count = 0

box_s.addEventListener('click',function(){
    count++;
    console.log(count)
    clickCount.innerText= count + " "
})