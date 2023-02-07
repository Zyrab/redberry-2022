// varibles
const form = document.querySelector('form')




// for text generation
form.addEventListener('keyup', e =>{ 
   //variables
   var outpudId = e.target.id+'1'
   var liveText = e.target.value 
   var elementId = e.target
   //--//
   //live text generator      
   document.getElementById(outpudId).innerHTML=liveText 
   //--//
})











//functions


//chek vlid input
const validInput = (validation, elementId) => {
   if (validation){
       elementId.classList.add('success')
       elementId.classList.remove('error')
       
   } else {
       elementId.classList.add('error')
       elementId.classList.remove('success')
   }
}