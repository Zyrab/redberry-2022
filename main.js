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
   validInputIcon(vlidText , e.target)
})


//mail validtion
mail.addEventListener('keyup', e=>{
   //variables
   var text = e.target.value
   var mailText= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge/
   var vlidMail = mailText.test(text)
   //
   validInput(vlidMail , e.target)
   validInputIcon(vlidMail , e.target)
})


//phone vlidtion
phone.addEventListener('keyup', e=>{
   //variables
   var text = e.target.value
   var phoneNumber= /^\+9955\d{8}$/ 
   var validNumber = phoneNumber.test(text.trim())
   //
   validInput(validNumber , e.target)
   validInputIcon(validNumber , e.target)
   //formating number input

})



// for text generation
form.addEventListener('keyup', e =>{ 
   //variables
   var outpudId = e.target.id+'Viwe'
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

// vlidtion icon disply function
const validInputIcon = (validation, elementId) => {
   var valid = elementId.id+'Valid'
   var inValid = elementId.id+'in'

   var validId = document.getElementById(valid)
   var inValidId = document.getElementById(inValid)
   

   if (validation){
       validId.classList.add('valid')
       inValidId.classList.remove('invalid')
       
   } else {
       inValidId.classList.add('invalid')
       validId.classList.remove('valid')
   }
}

//
form.addEventListener('submit', e => {
   e.preventDefault();


});


// page  navigation
form.addEventListener('click', e =>{
   
   const isPageButton = e.target.className === 'pagebutton';
  if (!isPageButton) {
    return;
  }

   var pag1 = document.getElementById('form-page-1')
   var page2 = document.getElementById('form-page-2')
   var page3 = document.getElementById('form-page-3')
   
   var pageCounter = +(e.target.id).charAt((e.target.id).length-1)

  if (pageCounter===1){

      pag1.classList.add('active')
      pag1.classList.remove('passive')
      page2.classList.remove('active')
      page2.classList.add('passive')
      page3.classList.remove('active')
      page3.classList.add('passive')

  } else if(pageCounter === 2) {

      pag1.classList.add('passive')
      pag1.classList.remove('active')
      page2.classList.add('active')
      page2.classList.remove('passive')
      page3.classList.remove('active')
      page3.classList.add('passive')

  } else if ( pageCounter === 3) {

      pag1.classList.add('passive')
      pag1.classList.remove('active')
      page2.classList.remove('active')
      page2.classList.add('passive')
      page3.classList.add('active')
      page3.classList.remove('passive')

  }
      
      // console.log(e.target.id)



})

