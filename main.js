// varibles
const form = document.querySelector('form')
const nameSurnme = document.querySelector('.name-surname')
const mail = document.querySelector('.mail')
const phone = document.querySelector('.phone')

//validation chekers

// name surname vlidtion
nameSurnme.addEventListener('keyup', e=>{
   //variables
   var text = e.target.value
   var georgianText= /^[ა-ჰ]{3,}$/
   var vlidText = georgianText.test(text)
   //
   validInput(vlidText , e.target)
})


//mail validtion
mail.addEventListener('keyup', e=>{
   //variables
   var text = e.target.value
   var mailText= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge/
   var vlidMail = mailText.test(text)
   //
   validInput(vlidMail , e.target)
})


//phone vlidtion
phone.addEventListener('keyup', e=>{
   //variables
   var text = e.target.value
   var phoneNumber= /^\+9955\d{8}$/ 
   var validNumber = phoneNumber.test(text.trim())
   //
   validInput(validNumber , e.target)
   //formating number input

})



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