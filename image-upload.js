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


})
