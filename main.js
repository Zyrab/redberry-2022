// varibles
const form = document.querySelector('form')


var nnm=document.getElementById('name')
window.onload = function(){
    
   var fnnm = localStorage.getItem('name')
   nnm.value=fnnm
   localStorage.clear()

};
    form.addEventListener('load', e => {

        localStorage.length
        console.log(localStorage.getItem('surname'))
    })

// form keyup event listener. 
form.addEventListener('keyup', e => {
    //variables
    var elementId = e.target
    var className = e.target.className
    var liveText = e.target.value
    var outpudId = e.target.id + 'View'
    //--//

    localStorage.setItem(e.target.id , liveText)


    //live text generator      
   // document.getElementById(outpudId).innerHTML=liveText 

    //--//

    // regex for every posible text validations in this form

    var onlyGeorgian = /^[ა-ჰ]{2,}$/
    var min2Symbol = /^[ა-ჰa-zA-Z0-9.!#$%&'*+/=?^_` {|}~-]{2,}/
    var textarea = /^[ა-ჰa-zA-Z0-9.!#$%&'*+/=?^_` {|}~-]/
    var phoneNumber = /^\+9955\d{8}$/
    var mailText = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge/

    //
    
    // generting classnmes to target specific inputs
    var infoValidtion = classNameMaker(className, 'info-input')
    var nameSurnme = classNameMaker(className, 'namesurname')
    var forPhoneNumber = classNameMaker(className, 'phone')
    var forMail = classNameMaker(className, 'mail')
    var forTextarea = classNameMaker(className, 'textarea')


    //displying validation icons
    validationFunction(infoValidtion, min2Symbol, liveText, elementId)
    validationFunction(nameSurnme, onlyGeorgian, liveText, elementId)
    validationFunction(forPhoneNumber, phoneNumber, liveText, elementId)
    validationFunction(forMail, mailText, liveText, elementId)
    validationFunction(forTextarea, textarea, liveText, elementId)
})

// generates a classname for validtion selector
const classNameMaker = (targetClass, elementClass) => {
    var className = (targetClass === elementClass || targetClass === elementClass + ' ' + 'error' || targetClass === elementClass + ' ' + 'success')
    return className
}

// validtes a input text based on regex
const validationFunction = (clssname, regex, text, elementId) => {
    var validRegex = regex.test(text.trim())
    if (clssname) {
        validInputIcon(validRegex, elementId)
    }
}


// validation icon display function
const validInputIcon = (validation, elementId) => {
    // generates icon Id based on input id
    var valid = elementId.id + 'Valid'
    var inValid = elementId.id + 'inVld'
    // selects an icon based on generated Id
    var validId = document.getElementById(valid)
    var inValidId = document.getElementById(inValid)

    if (validation) {
        // icon display
        validId.classList.add('valid')
        inValidId.classList.remove('invalid')
        elementId.labels.item(0).style.color = '#000000'
        //border display
        elementId.classList.add('success')
        elementId.classList.remove('error')
    } else {
        //icons display
        inValidId.classList.add('invalid')
        validId.classList.remove('valid')
        //border display
        elementId.classList.add('error')
        elementId.classList.remove('success')
    }
}


//
form.addEventListener('submit', e => {
    e.preventDefault();


});

// page  navigation buttons

form.addEventListener('click', e => {

    const isPageButton = e.target.className === 'pagebutton';
    const addSectionButton = e.target.className === 'add-button';
    if (!isPageButton && !addSectionButton) {
        return; 
    }
    addButtonFunction(e.target);
    if(e.target.id ==="page-2" ){
        nextPageButtonActivator(e.target.id);
    }
    
    if (e.target.id ==="page-3" || e.target.id === "page-1"){

        nextPageButtonActivator2(e.target.id);
    }
    if (e.target.id ==="pagi-2" ||e.target.id ==="pagi-4" ){

        nextPageButtonActivator3(e.target.id);
    }
    
})


// clone function
var count = 0
const addButtonFunction = (element) => {
    var whatToClone = element.id + '-div'
    var whereToClone = whatToClone + '-added'
    


    count ++
    if (element.className !== 'add-button') {
        return
    }
    
    const node = document.getElementById(whatToClone);
    const clone = node.cloneNode(true);
    var cloneNodes = clone.querySelectorAll('INPUT , TEXTAREA , LABEL , IMG')
    nextPageValidtion1(cloneNodes)
    document.getElementById(whereToClone).appendChild(clone);

}


// function recursiveSearchInputElement(elementNode, selectedNodes) {

//     if (elementNode.children.length > 0) {
//         for (const node of elementNode.children) {
//             recursiveSearchInputElement(node)
           
            
//         }
//     } else if (selectedNodes.value!==0) {
//         elementNode.value = ''
//         elementNode.id+=count
//     }
// }

function nextPageValidtion1(elementNode ) {
        
        for (i = 0 ; i < elementNode.length; i++) {
            node = elementNode.item(i)
            
            
            
            
            //reset styling
            node.classList.remove('invalid')
            node.classList.remove('valid')
            node.classList.remove('error')
            node.classList.remove('success')
            node.style.color = '#000000'          
            // clears clone values 
            if (node.value !== undefined){
                node.value=''
                node.id+=count
            }
            // connect labels to inputs
            if (node.nodeName === "LABEL"){
                node.htmlFor+=count
                node.id+=count
            }
            if (node.nodeName ==="IMG" && (node.classList.contains('valide' ) || node.classList.contains('validns' )) ){
                node.id= node.id.slice(0,-5)+count+'Valid'               
            }
            if (node.nodeName ==="IMG" && (node.classList.contains('invalidv' ) || node.classList.contains('invalidns' )) ){
                node.id= node.id.slice(0,-5)+count+'inVld'               
            }
        }      
} 

// 
function nextPageValidtion(elementNode ) {
    var error = []
        for (i = 0 ; i < elementNode.length; i++) {
            node = elementNode.item(i)
             
            nodeIdV = node.id+'Valid'
            nodeIdIn = node.id+'inVld'

            var validId = document.getElementById(nodeIdV)
            var inValidId = document.getElementById(nodeIdIn)
            if (node.classList.contains('error') || node.value==="") {
                error.push(node)
                node.labels.item(0).style.color = '#E52F2F' 
                //icon display
                inValidId.classList.add('invalid')
                validId.classList.remove('valid')
                //border display
                node.classList.add('error')
                node.classList.remove('success')
               
            } else{         
                node.labels.item(0).style.color = '#000000'  
           //error.splice(node)
            }
        }
       return error.length
       
        
} 




// page buttons activator

    // page1
    const nextPageButtonActivator = (elementId) => {
        var page1 = document.getElementById('form-page-1')
        var page2 = document.getElementById('form-page-2')
        var page3 = document.getElementById('form-page-3')
        var page1Input = page1.querySelectorAll('INPUT')
            pageCounter = +(elementId).charAt((elementId).length - 1)      
        if (pageCounter === 2 && nextPageValidtion(page1Input) ===0) {
            page1.classList.add('passive')
            page1.classList.remove('active')
            page2.classList.add('active')
            page2.classList.remove('passive')
            page3.classList.remove('active')
            page3.classList.add('passive')       
        } 
    }
    
    // page2
   const nextPageButtonActivator2 = (elementId) => {
       var page2 = document.getElementById('form-page-2')
       var page1 = document.getElementById('form-page-1')
       var page3 = document.getElementById('form-page-3')
       var page2Input = page2.querySelectorAll('INPUT , TEXTAREA')
           pageCounter = +(elementId).charAt((elementId).length - 1)     
       if (pageCounter === 1 ) {
           page1.classList.add('active')
           page1.classList.remove('passive')
           page2.classList.remove('active')
           page2.classList.add('passive')
           page3.classList.remove('active')
           page3.classList.add('passive')           
        }
        if (pageCounter === 3 && nextPageValidtion(page2Input) ===0 ) {
           page1.classList.add('passive')
           page1.classList.remove('active')
           page2.classList.remove('active')
           page2.classList.add('passive')
           page3.classList.add('active')
           page3.classList.remove('passive')
       }
   }
    //page3
    const nextPageButtonActivator3 = (elementId) => {
        var page1 = document.getElementById('form-page-1')
        var page2 = document.getElementById('form-page-2')
        var page3 = document.getElementById('form-page-3')
        var page3Input = page3.querySelectorAll('INPUT , TEXTAREA')
            pageCounter = +(elementId).charAt((elementId).length - 1)
        if (pageCounter === 2) {
            page1.classList.add('passive')
            page1.classList.remove('active')
            page2.classList.add('active')
            page2.classList.remove('passive')
            page3.classList.remove('active')
            page3.classList.add('passive')        
        }   
        
        if (pageCounter === 4 && nextPageValidtion(page3Input) ===0) {       
        }
        }







    form.addEventListener('change', e =>{
        const dateInput = e.target.type === 'date';
    if (!dateInput) {
        return; 
    }

        var validation =  (e.target.valueAsNumber !== 0 )
            validInputIcon  ( validation, e.target)


    })