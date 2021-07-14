// JavaScript

const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
let copyright = document.createElement("p");


//Footer Section- Copyright Current Year
copyright.innerHTML = `&copy; ${thisYear} Crystal Scott`;
footer.appendChild(copyright);

//Skills Section- Add list items of skills

const skillsArray = ['HTML', 'CSS', 'SAAS', 'JavaScript', 'jQuery', 'WordPress', 'ekklesia360', 'GitHub', 'Adobe Photoshop', 'Adobe Dreamweaver'];

const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.getElementsByTagName('ul')[0];

for(let i = 0; i < skillsArray.length; i += 1){
	let skill = document.createElement('li');
	skill.textContent = skillsArray[i];
	skillsList.appendChild(skill);
}

