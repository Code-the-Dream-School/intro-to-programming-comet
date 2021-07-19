let today=new Date()

today.getFullYear()

let thisYear=(today.getFullYear())

let footer=document.querySelector("footer")
footer.style ="border: dotted;"

let copyright=document.createElement("p")
copyright.innerHTML= `Nicole Merino Tsui ${thisYear}`  
footer.appendChild(copyright)

const skills =['Program Management', 'International Development', 'Transitional Team Building', 'Monitoring and Evaluation'];
let skillsSection=document.getElementById("skills")
let skillsList=skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
let skill= document.createElement("li");
skill.innerText=skills[i];
skillsList.appendChild(skill)
}

