//SKILLS
let skills =["HTML", "CSS", "JavaScript", "Git", "Bootstrap"];

let skillsSection = document.getElementById("skills");
let skillList = skillsSection.getElementsByTagName("ul")[0];


for (let i = 0; i < skills.length; i ++) {
    skill = document.createElement("li");
    skill.innerHTML = skills[i];
    // skill.style.border = "2px solid black";
    skillList.appendChild(skill);
}

//MESSAGES
//Hide the #messages section when the list is empty
// Create an "edit" button for each message entry that allows the user to input a new/modified message

let messageForm = document.getElementsByName("leave_message")[0];


messageForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    // console.log(name, email, message);


    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href=mailto:${email}>${name}</a> wrote: <span id="spanMessage">${message} </span>`;

    //edit button
    let editButton =  document.createElement("button");
    editButton.innerText = "edit";
    editButton.type = "button";

    editButton.addEventListener("click", (e) => {

        if (editButton.textContent === 'edit') {
            let span  =  document.getElementById("spanMessage");
            let input = document.createElement("input");
            input.type = "text";
            input.value = span.textContent;
            newMessage.insertBefore(input, span);
            newMessage.removeChild(span);
            editButton.textContent = "save";
        } else if (editButton.textContent === 'save') {
            // let input  = document.firstElementChild("span");
            let span = document.createElement("span");
            span.textContent = input.value;
            newMessage.insertBefore(span, input);
            newMessage.removeChild(input);
            editButton.textContent = "edit";
        }
    
    });

    //remove button
    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", (e) => {
    let entry  = e.target.parentNode;
    entry.remove();
    });


    //append elements
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

   

    messageForm.reset();
    
});


//FOOTER
let today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = "Marina Ivanovskaya  " + thisYear;
footer.appendChild(copyright);