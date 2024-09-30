const form = document.getElementById('form-to-resume') as HTMLFormElement;
const displayElement = document.getElementById('resume-display') as HTMLDivElement;


form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;

    const aboutMe = (document.getElementById('aboutMe') as HTMLInputElement).value;

    const email = (document.getElementById('email') as HTMLInputElement).value;

    const linkdin = (document.getElementById('linkdin') as HTMLInputElement).value;

    const github = (document.getElementById('github') as HTMLInputElement).value;

    const education = (document.getElementById('education') as HTMLInputElement).value;

    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const experience = (document.getElementById('experience') as HTMLInputElement).value;


    const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
    const profilePicFile = profilePicInput.files?.[0];

    if (profilePicFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const profilePicURL = event.target?.result as string;


            //Display Resume
        
    const htmlResume = `
    <h1> <b> Resume </b> </h1>

     <img src="${profilePicURL}" alt="Profile Picture" style="width:150px; height:150px; border-radius:50%;">


<h1> <b>Name:</b> ${name} </h1>


<h2> <i class="fa fa-solid fa-user"> </i> About Me </h2>
<p> ${aboutMe} </p>

<hr>

<h2> <i class="fa fa-solid fa-phone"></i> Contact Details </h2>

<p><i class="fa fa-solid fa-envelope"></i><b> Email: </b> ${email} </p>

<p> <i class="fa fa-brands fa-linkedin"></i><b>  LinkdIn: </b> ${linkdin} </p>

 <p><i class="fa fa fa-brands fa-github"></i><b> Github: </b> ${github} </p>
 
 <hr>

 <h2><i class="fa fa-solid fa-graduation-cap"></i> Education </h2>
 <p> ${education} </p>

 <h2><i class="fa fa-solid fa-gear"></i> Skills </h2>
 <p> ${skills} </p>

<h2><i class="fa fa-solid fa-briefcase"></i> Experience </h2>
<p> ${experience} </p>     `


if (displayElement) {
    displayElement.innerHTML = htmlResume;
}
};
    reader.readAsDataURL(profilePicFile);
    } else {

        //Without Profile pic display
        const htmlResume = `
        <h1> <b> Resume </b> </h1>


<h1> <b>Name:</b> ${name} </h1>

<h2> <i class="fa fa-solid fa-user"> </i> About Me </h2>
<p> ${aboutMe} </p>

<hr>

<h2> <i class="fa fa-solid fa-phone"></i> Contact Details </h2>

<p><i class="fa fa-solid fa-envelope"></i><b> Email: </b> ${email} </p>

<p> <i class="fa fa-brands fa-linkedin"></i><b>  LinkdIn: </b> ${linkdin} </p>

 <p><i class="fa fa fa-brands fa-github"> </i><b> Github: </b> ${github} </p>

 <hr>

 <h2><i class="fa fa-solid fa-graduation-cap"></i> Education </h2>
 <p> ${education} </p>

 <h2><i class="fa fa-solid fa-gear"></i> Skills </h2>
 <p> ${skills} </p>

<h2><i class="fa fa-solid fa-briefcase"></i> Experience </h2>
<p> ${experience} </p>     `;


           if (displayElement){
            displayElement.innerHTML= htmlResume;
           }     
        
    }

});