//copyright and footer
const today = new Date()
const thisyear = today.getFullYear()
const footer = document.querySelector('footer')
const copyright = document.createElement('p')
copyright.innerHTML = `Chris McCourt &copy; ${thisyear}`;
footer.appendChild(copyright)

// creat Skills section
let skills = ["JavaScript", "HTML", "R-Programming", "CSS"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

//generate skills list"
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
};

