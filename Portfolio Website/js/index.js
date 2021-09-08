//Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

//Skills Section
const skillsArray = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress', 'ekklesia360', 'GitHub', 'Adobe Photoshop', 'Accessibility'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.getElementsByTagName('ul')[0];
//Scroll Animation
const scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
const elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}
loop();

function isElementInViewport(el) {
  
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
//Navigation Toggle

document.getElementById('hamnav').addEventListener("click", function() {
	const input = document.getElementById('hamburger');
	input.checked = !input.checked;
	const hamnav = document.getElementById('hamnav');
	if(!input.checked){
		hamnav.style.background = 'none';
	}else{
		hamnav.style.background = '#fff';
	}
});



//Message Section with Form
const messageForm = document.getElementsByName('leave_message')[0];
const messagesList = document.getElementById('messages_list');
const messageSection = document.getElementById('messages');
const submitButton = document.getElementById('submit_button');

//Projects
fetchData("https://api.github.com/users/cscott828/repos");

function fetchData(url) {
	return fetch(url)
		.then(response => response.json())
		.then(data => gitHubRequest(data))
		.catch((error) => {
		console.error("Error:", error);
	})
}

function gitHubRequest(data){
	const projectList = document.querySelector('#projects');
	const ulElement = projectList.querySelector('ul');
	
	for(i=0; i< data.length; i++){
		let project = document.createElement('li');
		project.innerHTML = `<a href= ${data[i].html_url} target="_blank">${data[i].name}</a>`;
		ulElement.appendChild(project);
		
		let newList = document.createElement('ul');
		project.appendChild(newList);
		
		let projectDescription = document.createElement('li');
		projectDescription.innerText = data[i].description;
		project.appendChild(projectDescription);
		newList.appendChild(projectDescription);
		
		let projectDate = document.createElement('li');
    	let createDate = new Date(Date.parse(data[i].created_at));
    	projectDate.innerText = "Created: " + createDate.getMonth() + "/" + createDate.getDate() + "/" + createDate.getFullYear();
    	newList.appendChild(projectDate);		
	}
}


//Footer Section- Copyright Current Year
copyright.innerHTML = `&copy; ${thisYear} Crystal Scott`;
footer.appendChild(copyright);

//Skills Section- Add list items of skills
for(let i = 0; i < skillsArray.length; i += 1){
	let skill = document.createElement('li');
	skill.textContent = skillsArray[i];
	skill.setAttribute('class', 'skillLi');
	skillsList.appendChild(skill);
}

//Connect Section- Message Form
function createLi(formName, formEmail, formMessage){
	const li = document.createElement('li');
	li.innerHTML = `<a href="mailto:${formEmail}">${formName} </a><span class="message">Message: ${formMessage}</span> `;
	//Remove Button
	const removeButton = document.createElement('button');
	removeButton.innerText = 'Remove';
	removeButton.setAttribute('type', 'button');
	//Edit Button
	const editButton = document.createElement('button'); 
	editButton.innerText = 'Edit';
	editButton.setAttribute('type', 'button');
	//Appending
	li.appendChild(editButton);
	li.appendChild(removeButton);
	messagesList.appendChild(li);
	//Display Messages Section
	messageSection.style.display = ''; 
}

	//Form Value Collection
submitButton.addEventListener('click', (event) => {
	event.preventDefault();
	const formName = document.getElementById('name').value;
	const formEmail = document.getElementById('email').value;
	const formMessage = document.getElementById('message').value;
	createLi(formName, formEmail, formMessage);
	//Add to give email functionality
//	window.open('mailto:clcarson84@gmail.com?subject=New Form Input &body=' + formName + '%0A' + formEmail + '%0A' + formMessage);
	messageForm.reset();
});

	//Hide Messages Section if Empty
if (messagesList.children.length == 0){
	messageSection.style.display = 'none';
}

messagesList.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const button = e.target;
		const li = button.parentNode;
		const ul = li.parentNode;
		if (button.textContent === 'Remove') {
			ul.removeChild(li);
			if (messagesList.children.length == 0){
				messageSection.style.display = 'none';
			}
		} else if (button.textContent === 'Edit') {
			const span = li.querySelector('span');
			console.log(span);
			const input = document.createElement('input');
			input.className += 'input';
			input.type = 'text';
			input.value = span.textContent;
			li.insertBefore(input, span);
			li.removeChild(span);
			button.textContent = 'Save';
		} else if (button.textContent === 'Save') {
			const input = li.querySelector('input');
			const span = document.createElement('span');
			span.textContent = input.value;
			li.insertBefore(span, input);
			li.removeChild(input);
			button.textContent = 'Edit';
		}
	}
});






