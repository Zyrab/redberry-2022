

fetch('https://resume.redberryinternship.ge/api/degrees')
.then(res =>{ return res.json()})
.then(data => {
    var options = ''
    data.forEach(element = (option) => {
        options+=`<option value="${option.title}" id="${option.id}">${option.title}</option>`
    });

    var select = document.getElementById('diploma')
    select.innerHTML= options
})

//console.log(fetch('https://resume.redberryinternship.ge/api/degrees'))
