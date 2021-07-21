let today = new Date();
const ThisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("P"); // Create paragraph
copyright.innerHTML = `&copy;Fabian Aparicio  ${ThisYear}`;
footer.appendChild(copyright);

const skills = ["Web sides", "JavaScript", "Html", "Internet Conection", "GIT", "GitHub", "Visual Studio"];
const skillsSection = document.getElementById("skills1");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);

}