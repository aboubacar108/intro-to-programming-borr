let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `<span>Aboubacar Kaba ${thisYear}</span>`;
footer.appendChild(copyright);

const skills = ["Internal & External Audit","Digital Audit using Analytics", "SOX", "IFRS","Financial Analysis & Reporting", "Risk assessment", "Report writing", "Customer Service", "Web Development", "Programming with JavaScript, HTML, CSS", "Advanced Excel" ];
const skillsSection = document.getElementById('#skills');
const skillsList = document.querySelector('.list');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
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
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', removeEvent);
    function removeEvent() {
    let entry = document.querySelector('button').parentNode;
    entry.remove();
    };
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
}

