
let aHome1 = document.getElementById('linkHome1')
let aHome2 = document.getElementById('linkHome2')
let aHome3 = document.getElementById('linkHome3')
let aHome4 = document.getElementById('linkHome4')


window.onscroll = function() {
    if(scrollY >= 400){
        aHome1.style.background = "red"
    }else{
        aHome1.style.background = "none"
    }
        
    
}
