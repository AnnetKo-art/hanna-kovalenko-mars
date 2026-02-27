console.log('JS loaded');//check if my JS is loading.

//FOOTER

const myFooter = document.createElement('footer');//DOM creation
document.body.appendChild(myFooter);
console.log(myFooter);

const today=new Date();
const thisYear=today.getFullYear();
const footer = document.querySelector('footer');// Select footer from DOM
const copyright=document.createElement('p');
copyright.innerText = `\u00A9 Hanna Kovalenko ${thisYear}`;  
copyright.style.cssText = `
  color: gray;
  font-size: clamp(0.9rem, 2vw, 2rem); /* min 0.8rem, scales with viewport width, max 2rem */
  text-align: center;
  padding: 0.5em 0;       /* relative to element’s font size */
  font-style: italic;
`;
footer.append(copyright);// Append paragraph to footer

//SKILLS

const skills=["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub", "C#", "C++","Java"];
const skillsSection = document.getElementById('skills');
//const skillsSection = document.querySelector('#skills');
const skillsList=skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
let skill=document.createElement('li');
skill.innerText=skills[i]; 
 skillsList.appendChild(skill);
}


//  FUNCTION TO TOGGLE MESSAGES SECTION VISIBILITY 
function toggleMessagesSection() {
  // Get the Messages section
  const messageSection = document.getElementById("messages");
  
  // Get the Message List
  const messageList = messageSection.querySelector("ul");
  
  // If list length is 0, then hide the Messages section
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}
// Initially hide the messages section
toggleMessagesSection();

// FILL  IN  THE  FORM 
const messageForm = document.getElementById('leaveMessage');

messageForm.addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent page refresh 
    // Access form field values using their "name" attributes:
    const usersNameInput = event.target.usersName.value;
    const usersEmailInput = event.target.usersEmail.value;
    const usersMessageInput = event.target.usersMessage.value;
    console.log(usersNameInput, usersEmailInput, usersMessageInput);

    // Select Message section ELements
    const messageSection=document.getElementById('messages');
    const messageList=messageSection.querySelector('ul');
     // Create a new Message element
    const newMessage=document.createElement('li');
    //Insert HTML inside the <li> , the name becomes a clickable email link
    newMessage.innerHTML = `
  <a href="mailto:${usersEmailInput}">${usersNameInput}</a>
  <span> ${usersMessageInput} </span>
`;
  const removeButton=document.createElement('button');
  removeButton.innerText='Remove';
  removeButton.type="button";
  removeButton.classList.add("remove-btn"); //give the class name to the Remove button to add styling
  removeButton.addEventListener('click',function(event){
    const entry = event.target.parentNode;  // parent <li> of the button
    entry.remove();                         // remove it from the DOM
  toggleMessagesSection(); // update visibility after removal 

  })

   // Append remove button to the <li>
    newMessage.appendChild(removeButton);

    // Append <li> to the <ul>
    messageList.appendChild(newMessage);
    toggleMessagesSection();//we display the message in visible now Messages section
    // Reset the form
    event.target.reset();

});

//FETCH API - PROJECT SECTION
fetch("https://api.github.com/users/AnnetKo-art/repos")
// Convert the response into JSON format
.then(function(response){
  return response.json();
})
// Work with the array of repositories returned from GitHub
.then(function(repositories){
  console.log("Repositories:", repositories);
   // Select the Projects section from the HTML
  const projectSection=document.getElementById("projects");
  const projectList=projectSection.querySelector("ul");
  // Loop through each repository
  for(let i=0; i<repositories.length; i++){
    const project=document.createElement("li");
    project.innerText=repositories[i].name;
    projectList.appendChild(project); // Add the list item to the <ul>
  }
})
.catch(function(error)
{
console.error("Error fetching repositories:", error);
const projectSection=document.getElementById("Projects");
projectSection.innerHTML+="<p>Unable to load projects at this time.<p>";
});
