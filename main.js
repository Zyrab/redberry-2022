// varibles
const form = document.querySelector('form')


// form keyup event listener. 
form.addEventListener('keyup', e =>{ 

   //variables
   var elementId = e.target
   var className = e.target.className
   var liveText = e.target.value 
   var outpudId = e.target.id+'Viwe'
   //--//

   //live text generator      

   //document.getElementById(outpudId).innerHTML=liveText 

   //--//

   // regex for every posible text validations in this form

   var onlyGeorgian = /^[ა-ჰ]{3,}$/
   var min2Symbol = /^[ა-ჰa-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{3,}/
   var phoneNumber= /^\+9955\d{8}$/ 
   var mailText= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge/

   //
   
   // generting classnmes to target specific inputs
   var infoValidtion = classNameMaker(className,'info-input')
   var nameSurnme = classNameMaker(className,'namesurname')
   var forPhoneNumber = classNameMaker(className,'phone')
   var forMail = classNameMaker(className,'mail')
      

   //displying validation icons
  validationFunction(infoValidtion,min2Symbol,liveText,elementId)
  validationFunction(nameSurnme,onlyGeorgian,liveText,elementId)
  validationFunction(forPhoneNumber,phoneNumber,liveText,elementId)
  validationFunction(forMail,mailText,liveText,elementId)
})

// generates a classname for validtion selector
   const classNameMaker = (targetClass, elementClass) => {
      var className =(targetClass === elementClass || targetClass === elementClass +' '+'error' || targetClass === elementClass +' '+'success')
      return className
   }

// validtes a input text based on regex
 const validationFunction = (clssname,regex,text,elementId ) =>{
      var validRegex = regex.test(text.trim())
      if (clssname){ 
         validInput(validRegex,elementId)
         validInputIcon(validRegex,elementId)
      } 
 }

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
   var inValid = elementId.id+'inValid'

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


// page  navigation buttons

form.addEventListener('click', e =>{
   
   const isPageButton = e.target.className === 'pagebutton';
   const addButton = e.target.className === 'add-button'
  if (!isPageButton && !addButton) {
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

  //listens to a button for experiance, aducation and adds section

  addButtonFunction (e.target)


})


// clone function
  const addButtonFunction = (element) => {
   var whatToClone = element.id+'-div'
   var whereToClone = whatToClone+'-added'
   if ( element.className!== 'add-button'){
      return
   }
  const node = document.getElementById(whatToClone);
  //const clone = node.cloneNode(true);
  const para = document.createElement("div");
  para.innerText = "This is a paragraph";
  document.getElementById(whereToClone).appendChild(para);

}
