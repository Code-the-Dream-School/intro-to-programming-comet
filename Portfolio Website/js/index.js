//Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

//Skills Section
const skillsArray = ['HTML', 'CSS', 'SAAS', 'JavaScript', 'jQuery', 'WordPress', 'ekklesia360', 'GitHub', 'Adobe Photoshop'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.getElementsByTagName('ul')[0];

//Message Section with Form
const messageForm = document.getElementsByName('leave_message')[0];
const messagesList = document.getElementById('messages_list');
const messageSection = document.getElementById('messages');
const submitButton = document.getElementById('submit_button');




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
	li.innerHTML = `<a href="mailto:${formEmail}">${formName} </a><span class="message">wrote: ${formMessage}</span> `;
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





