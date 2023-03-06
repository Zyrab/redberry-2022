window.onload = function(){
    var icons = document.querySelector('.contact')

    icons.addEventListener('change' , e =>{

        console.log(icons.childNodes[3].textContent)
    })
}