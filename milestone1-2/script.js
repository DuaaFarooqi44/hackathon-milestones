/*const skillsButton= document.getElementById('hide-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

skillsButton.addEventListener('click', ()=> {
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
})*/
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
