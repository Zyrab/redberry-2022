// varibles
const form = document.querySelector('form')


// form keyup event listener. 
form.addEventListener('keyup', e => {
    //variables
    var elementId = e.target
    var className = e.target.className
    var liveText = e.target.value
    var outpudId = e.target.id + 'View'
    //--//

    //for phone number formating
    if(e.target.id === "phone") {
        e.target.value= autoFormatPhoneNumber(e.target.value)     
    }

    //live text generator      
    document.getElementById(outpudId).innerHTML=liveText 

    //--//

    // regex for every posible text validations in this form

    var onlyGeorgian = /^[ა-ჰ]{2,}$/
    var min2Symbol = /^[ა-ჰa-zA-Z0-9.!#$%&'*+/=?^_` {|}~-]{2,}/
    var textarea = /^[ა-ჰa-zA-Z0-9.!#$%&'*+/=?^_` {|}~-]/
    var phoneNumber = /^(\+995)(\s5)(\d{2})(\s\d{2})(\s\d{2})(\s\d{2})$/
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

// validtes an input text based on regex
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
        //selecting form element to clone
        var whatToClone = element.id + '-div'
        var whereToClone = whatToClone + '-added'
        var whatToCloneView = element.id + '-divView'
        var whereToCloneView = whatToCloneView + '-added'
        // targets only buttons for cloning
        count ++
        if (element.className !== 'add-button') {
            return
        }
        const node = document.getElementById(whatToClone);
        const clone = node.cloneNode(true);
        const nodeView = document.getElementById(whatToCloneView);
        const cloneView = nodeView.cloneNode(true);
        // selectiong elements to generate id dinamicly
        var cloneNodes = clone.querySelectorAll('INPUT , TEXTAREA , LABEL , IMG ,SELECT')
        var cloneNodesView = cloneView.querySelectorAll('H4 , SPAN , P')
        addSectionForAddingMoreInfo(cloneNodes)
        addSectionForAddingMoreInfo(cloneNodesView)

        document.getElementById(whereToCloneView).appendChild(cloneView);
        document.getElementById(whereToClone).appendChild(clone);

    }

//clone id generator, value reset
function addSectionForAddingMoreInfo(elementNode ) {        
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
            if (node.nodeName ==="IMG" && (node.classList.contains('valide') || node.classList.contains('validns') || node.classList.contains('validd')) ){
                node.id= node.id.slice(0,-5)+count+'Valid'               
            }
            if (node.nodeName ==="IMG" && (node.classList.contains('invalidv') || node.classList.contains('invalidns') || node.classList.contains('invalidd')) ){
                node.id= node.id.slice(0,-5)+count+'inVld'               
            }
            if (node.nodeName ==="H4" || node.nodeName ==="SPAN" || node.nodeName ==="P" ){
                node.innerText =""
                node.id= node.id.slice(0,-4)+count+'View'
            }
    }      
} 

// cheks if all the inputs are filled in the current page
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
        var page3Input = page3.querySelectorAll('INPUT , TEXTAREA , SELECT')
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


        //date && select input validator
    form.addEventListener('change', e =>{
        // to target only date and select input types
        const dateInput = e.target.type === 'date';
        const optionInput = e.target.nodeName ==='SELECT'
    if (!dateInput && !optionInput) {
        return; 
    }
        var outpudId = e.target.id + 'View'
        document.getElementById(outpudId).innerHTML=e.target.value 
        var validation =  (e.target.valueAsNumber !== 0 ||e.target.value !=='')
            validInputIcon  ( validation, e.target)

    })


    
        //phone number editor
        function autoFormatPhoneNumber(phoneNumberString) {
            try {
            var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
            var match = cleaned.match(/^(995)?(\d{0,3})?(\d{0,2})?(\d{0,2})?(\d{0,2})?$/);
            var intlCode = match[1] ? "+995" : "";
            return [intlCode, 
                    match[2] ? " ": "",
                    match[2], 
                    match[3] ? " ": "",
                    match[3],
                    match[4] ? " ": "",
                    match[4],
                    match[5] ? " ": "",
                    match[5]
                    ].join("");
            } catch (err) {
            return "";
            }
        }