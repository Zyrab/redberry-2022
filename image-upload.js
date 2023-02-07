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

  //   var valid = e.target.id+'v'
  //   var inValid = e.target.id+'in'
  //   var validId = document.getElementById(valid)
  //   var inValidId = document.getElementById(inValid)


  //   if (e.target.value === ' '){
  //     validId.classList.add('valid')
  //     inValidId.classList.remove('invalid')
      
  // } else {
  //     inValidId.classList.add('invalid')
  //     validId.classList.remove('valid')
  // }

})



