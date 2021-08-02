// create new date obj and current yr
const today = new Date();
var thisYear = today.getFullYear();

// use DOM to select the footer element
 var footer = document.querySelector('footer');

// create new paragraph named copyright
 var copyright = document.createElement('p');
 copyright.innerHTML = 'Sophia Smith '  + thisYear;

// use appendchild DOM manipulation
    footer.appendChild(copyright);
   // document.getElementById('footer').appendChild(copyright);

 // add skills section; use for loop 
var skills = ['reliable', 'willing to learn'];
var skillsSection = document.querySelector('#skills');
var skillsList = skillsSection.querySelector('ul');
    for(i = 0; i < skills.length; i++){
        var newLine = document.createElement('li');
        newLine.innerHTML = skills[i];
        skillsList.appendChild(newLine);
    }

// use DOM selection to access 'leave a message'
var messageForm = document.getElementById('leave_message');
    // add event listener, add callback for each form field
    if(messageForm){
        messageForm.addEventListener('submit', function submitAction(event) {
            event.preventDefault();
             var vname = event.target.name.value;
             var vemail = event.target.email.value;
             var vmessage = event.target.message.value;
             console.log(vname);
             console.log(vemail);
             console.log(vmessage);
            // using DOM select #messages by id store in var messageSection
              var messageSection = document.getElementById('messages');
              var messageList = messageSection.querySelector('ul');
            // create new li store in var NewMessage
              var newMessage = document.createElement('li');
            // use innerHTML to add <a> element and <span> element
                newMessage.innerHTML = ('<a href="mailto:' + vemail + '">' + vname + '</a>' + '<span>' + vmessage + '</span>');
            // create <button> element named removeButton
              var removeButton = document.createElement('button');
                // set inner text to 'remove', set type to 'button'
                removeButton.innerHTML = 'remove';
                removeButton.type = 'button';
                // add event listener that handles 'click' event, use parentNode to find parent func named entry 
                removeButton.addEventListener('click', 
                function removeElement(event){
                    var entry = event.target.parentNode;
                    entry.remove();
                })
                //append removeButton to newMessages
                newMessage.appendChild(removeButton);
                messageList.appendChild(newMessage);
            // add line of code 'reset method' to clear the form 
             messageForm.reset();
        })
        }




