var form = document.getElementById('form-to-resume');
var displayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var aboutMe = document.getElementById('aboutMe').value;
    var email = document.getElementById('email').value;
    var linkdin = document.getElementById('linkdin').value;
    var github = document.getElementById('github').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var profilePicInput = document.getElementById('profilePic');
    var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePicFile) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var profilePicURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            //Display Resume
            var htmlResume = "\n    <h1> <b> Resume </b> </h1>\n\n     <img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" style=\"width:150px; height:150px; border-radius:50%;\">\n\n\n<h1> <b>Name:</b> <span contenteditable=\"true\"> ").concat(name, " </span> </h1>\n\n\n<h2> <i class=\"fa fa-solid fa-user\"> </i> About Me </h2>\n<p span contenteditable=\"true\"> ").concat(aboutMe, " </p>\n\n<hr>\n\n<h2> <i class=\"fa fa-solid fa-phone\"></i> Contact Details </h2>\n\n<p><i class=\"fa fa-solid fa-envelope\"></i><b> Email: </b> <span contenteditable=\"true\"> ").concat(email, " </span> </p>\n\n<p> <i class=\"fa fa-brands fa-linkedin\"></i><b>  LinkdIn: </b> <span contenteditable=\"true\"> ").concat(linkdin, " </span> </p>\n\n <p><i class=\"fa fa fa-brands fa-github\"></i><b> Github: </b> <span contenteditable=\"true\"> ").concat(github, " </span> </p>\n \n <hr>\n\n <h2><i class=\"fa fa-solid fa-graduation-cap\"></i> Education </h2>\n <p span contenteditable=\"true\"> ").concat(education, " </p>\n\n <h2><i class=\"fa fa-solid fa-gear\"></i> Skills </h2>\n <p span contenteditable=\"true\"> ").concat(skills, " </p>\n\n<h2><i class=\"fa fa-solid fa-briefcase\"></i> Experience </h2>\n<p span contenteditable=\"true\"> ").concat(experience, " </p>     ");
            if (displayElement) {
                displayElement.innerHTML = htmlResume;
            }
        };
        reader.readAsDataURL(profilePicFile);
    }
    else {
        //Without Profile pic display
        var htmlResume = "\n        <h1> <b> Resume </b> </h1>\n\n\n<h1> <b>Name:</b> <span contenteditable=\"true\"> ".concat(name, " </span> </h1>\n\n\n<h2> <i class=\"fa fa-solid fa-user\"> </i> About Me </h2>\n<p span contenteditable=\"true\"> ").concat(aboutMe, " </p>\n\n<hr>\n\n<h2> <i class=\"fa fa-solid fa-phone\"></i> Contact Details </h2>\n\n<p><i class=\"fa fa-solid fa-envelope\"></i><b> Email: </b> <span contenteditable=\"true\"> ").concat(email, " </span> </p>\n\n<p> <i class=\"fa fa-brands fa-linkedin\"></i><b>  LinkdIn: </b> <span contenteditable=\"true\"> ").concat(linkdin, " </span> </p>\n\n <p><i class=\"fa fa fa-brands fa-github\"></i><b> Github: </b> <span contenteditable=\"true\"> ").concat(github, " </span> </p>\n \n <hr>\n\n <h2><i class=\"fa fa-solid fa-graduation-cap\"></i> Education </h2>\n <p span contenteditable=\"true\"> ").concat(education, " </p>\n\n <h2><i class=\"fa fa-solid fa-gear\"></i> Skills </h2>\n <p span contenteditable=\"true\"> ").concat(skills, " </p>\n\n<h2><i class=\"fa fa-solid fa-briefcase\"></i> Experience </h2>\n<p span contenteditable=\"true\"> ").concat(experience, " </p>         ");
        if (displayElement) {
            displayElement.innerHTML = htmlResume;
        }
    }
});
