const photo = document.querySelector('.image-upload-input')
const photoOutput = document.querySelector('.image')


//arrays
let profileImg = []

//display img function
const displayImg = () =>{
    let images = ""
    profileImg.forEach((image) => {
    images += `
                <img class="profilepic" src="${URL.createObjectURL(image)}" alt="image">
              `
  })
  photoOutput.innerHTML = images
}


//cheking and displying img
photo.addEventListener('change', e=>{
    const file = photo.files
    profileImg.push(file[0])
    displayImg()
    profileImg.splice(file[0])

    var valid = e.target.id+'Valid'
    var inValid = e.target.id+'inVld'
    var validId = document.getElementById(valid)
    var inValidId = document.getElementById(inValid)
    var label = document.getElementById('image-upload-input-label')
    var elementId = e.target

    if (file.length !== 0) {
      // icon display
      validId.classList.add('valid')
      inValidId.classList.remove('invalid')
      label.style.color = '#000000'
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
})



