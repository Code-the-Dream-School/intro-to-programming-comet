//Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Crystal Scott`;
footer.appendChild(copyright);

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

//Projects Section
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

//Skills Section- Add list items of skills
for(let i = 0; i < skillsArray.length; i += 1){
	let skill = document.createElement('li');
	skill.textContent = skillsArray[i];
	skill.setAttribute('class', 'skillLi');
	skillsList.appendChild(skill);
}

//Form 
const form = document.getElementById("my-form");
	async function handleSubmit(event) {
		event.preventDefault();
		const status = document.getElementById("status");
		const data = new FormData(event.target);
		fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				'Accept': 'application/json'
			}
		}).then(response => {
			status.classList.add('success');
			status.innerHTML = "Your message has been successfully sent.";
			form.reset();
		}).catch(error => {
			status.classList.add('error');
			status.innerHTML = "Oops! There was a problem submitting your form."
		});
	}
	form.addEventListener("submit", handleSubmit);

