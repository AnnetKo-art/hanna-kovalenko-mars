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

