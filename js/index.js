let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy;Aboubacar Kaba ${thisYear}`;
footer.appendChild(copyright);

const skills = ["Internal & External Audit","Digital Audit using Analytics", "SOX", "IFRS","Financial Analysis & Reporting", "Risk assessment", "Report writing", "Customer Service", "Web Development", "Programming with JavaScript, HTML, CSS", "Advanced Excel" ];
const skillsSection = document.getElementById('#skills');
const skillsList = document.querySelector('.list');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.classList.add('tag')
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
  };
 
const messageForm = document.getElementById('leave_message');
messageForm.addEventListener('submit', submitForm);
function submitForm(event) {
    event.preventDefault();
    const Name = event.target.name.value;
    const Email = event.target.email.value;
    const Message = event.target.message.value;
    console.log(Name);
    console.log(Email);
    console.log(Message);

    const messageSection = document.getElementById('messages');
    const messageList = document.querySelector('.addedMessage');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<span> <a href = "${Email}">${Name}</a> ${Message}</span>`;
        
    const removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', removeEvent);
    function removeEvent(e) {
      e.target.parentNode.remove()
    };
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
}

function renderProjectsWithXHR() {
  const githubRequest = new XMLHttpRequest()

  githubRequest.open('GET', 'https://api.github.com/users/aboubacar108/repos')

  githubRequest.addEventListener('load', function () {
    const data = JSON.parse(this.response)

    // filter out irrelevant repositories
    const filteredData = data.filter((repo) =>
      repo.name.includes('intro-to-programming')
    )

    const projectSection = document.querySelector('#projects')
    const projectList = projectSection.querySelector('ul')

    for (let repository of filteredData) {
      const project = document.createElement('li')
      project.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a>`
      projectList.appendChild(project)
    }
  })

  githubRequest.send()
}

function renderProjectsWithFetch() {
  fetch('https://api.github.com/users/aboubacar108/repos')
    .then((res) => res.json())
    .then((data) => {
      // filter out irrelevant repositories
      const filteredData = data.filter((repo) =>
        repo.name.includes('intro-to-programming')
      )

      const projectSection = document.querySelector('#projects')
      const projectList = projectSection.querySelector('ul')

      for (let repository of filteredData) {
        const project = document.createElement('li')
        project.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a>`
        projectList.appendChild(project)
      }
    })
}

document.addEventListener('DOMContentLoaded', () => {
  //renderProjectsWithXHR()
  renderProjectsWithFetch()
})
