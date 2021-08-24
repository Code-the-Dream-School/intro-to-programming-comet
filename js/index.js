// lesson 4-2
// copyright and footer
const today = new Date()
const thisyear = today.getFullYear()
//const sm = document.getElementByClass("fa")
const footer = document.querySelector("footer")
const copyright = document.createElement("p")
copyright.innerHTML = `Chris McCourt &copy; ${thisyear}`;
footer.appendChild(copyright)
console.log("copyright");


// create skills section
let skills = ["JavaScript", "HTML", "R-Programming", "CSS"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

// generate skills list
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
};

//lesson 4-3 handle message form
const messageForm = document.querySelector('form[name="leave_message"]')
messageForm.addEventListener("submit", (e) => {
    e.preventDefault()
let name = messageForm.querySelector('input[id ="name"]').value;
console.log(name);
let email = messageForm.querySelector('input[name ="email"]').value;
console.log(email);
let message = messageForm.querySelector("#message").value;
console.log(message);

let messageSection = document.getElementById("messages")
let messageList = messageSection.querySelector("ul")
console.log(messageList);
    
let newMessage = document.createElement("li");
let a = document.createElement("a");
let link = document.createElement("span");
    a.appendChild(link);
    a.innerText = name;
    a.href = "mailto:" + email;
    newMessage.appendChild(a);

const messageText=document.createElement("span")
messageText.innerText=" - " + message + " "
    newMessage.appendChild(messageText)

    // remove button to remove message.
const removeButton = document.createElement("button");
    removeButton.innerText = "remove"
    removeButton.type = "button";
    removeButton.addEventListener("click", (event) => {
const entry = event.target.parentNode
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

const githubRequest = new XMLHttpRequest();
const GITHUB_USERNAME =  'francinemclaurin'

githubRequest.open('GET', 'https://api.github.com/users/cm-humanremains/repos')

githubRequest.send();

// Handle Response from Server

githubRequest.addEventListener('load', function () {
    let repositories = JSON.parse(this.response);

    console.log(repositories);

    // get projects section
    const projectSection = document.getElementById('projects');

    // get ul list inside of section
    const projectList = projectSection.querySelector('ul');

    // for loop to loop over repositories. another way to do for loop.
    for( let i = 0; i< repositories.length;i++){
        let project=document.createElement('li');
        project.innerText= repositories[i].name;
        projectList.appendChild(project)
    }
})