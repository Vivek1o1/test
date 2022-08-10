let studentname = document.querySelector('.name')
let email = document.querySelector('.email')
let imageLink = document.querySelector('.image-link')
let website = document.querySelector('.website')
let HTML=document.querySelector('.HTML')
let CSSbutton=document.querySelector('.css');
let java=document.querySelector('.java')
let male=document.querySelector('.male-button')
let female=document.querySelector('.female-button')
let enrollbutton = document.querySelector('.enroll-student-button')
let enrolledstudents = document.querySelector('.enrolled-students')


enrollbutton.addEventListener('click', () => {
    let student = document.createElement('div')
    let studentName = document.createElement('p')
    let studentEmail = document.createElement('p')
    let studentImage = document.createElement('img')
    let studentWebsite = document.createElement('p')
    let studentdetails = document.createElement('div')
    let studentimagecontainer = document.createElement('div')
    let htmlbutton=document.createElement('p')
    let cssbutton=document.createElement('p')
    let javabutton=document.createElement('p')
    let malebutton=document.createElement('p')
    let femalebutton=document.createElement('p')

    student.classList.add('student');
    studentName.classList.add('student-name')
    studentEmail.classList.add('student-email')
    studentImage.classList.add('student-image')
    studentWebsite.classList.add('student-website')
    studentdetails.classList.add('student-details')

    enrolledstudents.appendChild(student)
    student.appendChild(studentdetails)
    student.appendChild(studentimagecontainer)
    studentdetails.appendChild(studentName)
    studentdetails.appendChild(studentEmail)
    studentdetails.append(htmlbutton)
    studentdetails.append(cssbutton)
    studentdetails.append(javabutton)
    studentdetails.append(malebutton)
    studentdetails.append(femalebutton)
    studentimagecontainer.appendChild(studentImage)
    studentdetails.appendChild(studentWebsite)

    studentName.innerHTML = studentname.value;
    studentEmail.innerText = email.value;
   
    studentImage.src = imageLink.value;
    studentWebsite.innerHTML = website.value;
    // htmlbutton.innerHTML=HTML.checked.value;
    // cssbutton.innerHTML=CSSbutton.checked.value;
    if(java.checked){
        javabutton.innerHTML=java.value;
    }
    if(CSSbutton.checked){
        cssbutton.innerHTML=CSSbutton.value;
    }
    if(HTML.checked){
        htmlbutton.innerHTML=HTML.value;
    }
    if(male.checked){
        malebutton.innerHTML=male.value;
    }
    if(female.checked){
        femalebutton.innerHTML=female.value;
    }
    

   
   
   
   
   
//     var rates = document.querySelectorAll('.checkbox');
//     console.log(rates)
// var rate_value;
// for(var i = 0; i < rates.length; i++){
//     if(rates[i].checked){
//         rate_value = rates[i].value;
//     }
// }
// console.log(rate_value)
})
