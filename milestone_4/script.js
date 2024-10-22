var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var displayModal = document.getElementById('display-modal');
var editModal = document.getElementById('edit-modal');
var closeDisplayButton = document.querySelector('.close-button');
var closeEditButton = document.querySelector('.close-edit-button');
var editButton = document.getElementById('edit-button');
var saveEditButton = document.getElementById('save-edit-button');
var editFormContainer = document.getElementById('edit-form-container');
var resumeData = {};
// Handle form submission to generate resume
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('experience').value,
        skills: document.getElementById('skills').value
    };
    displayResume();
});
// Display resume in the display modal
function displayResume() {
    var name = resumeData.name, email = resumeData.email, phone = resumeData.phone, education = resumeData.education, experience = resumeData.experience, skills = resumeData.skills;
    var resumeHtml = "\n        <div class=\"resume-container\">\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        </div>\n    ");
    resumeDisplay.innerHTML = resumeHtml;
    displayModal.style.display = 'flex';
}
// Open the edit modal with current resume data
editButton.addEventListener('click', function () {
    var name = resumeData.name, email = resumeData.email, phone = resumeData.phone, education = resumeData.education, experience = resumeData.experience, skills = resumeData.skills;
    var editFormHtml = "\n        <input type=\"text\" id=\"edit-name\" value=\"".concat(name, "\" />\n        <input type=\"email\" id=\"edit-email\" value=\"").concat(email, "\" />\n        <input type=\"tel\" id=\"edit-phone\" value=\"").concat(phone, "\" />\n        <textarea id=\"edit-education\">").concat(education, "</textarea>\n        <textarea id=\"edit-experience\">").concat(experience, "</textarea>\n        <textarea id=\"edit-skills\">").concat(skills, "</textarea>\n    ");
    editFormContainer.innerHTML = editFormHtml;
    displayModal.style.display = 'none';
    editModal.style.display = 'flex';
});
// Save changes from the edit modal
saveEditButton.addEventListener('click', function () {
    resumeData = {
        name: document.getElementById('edit-name').value,
        email: document.getElementById('edit-email').value,
        phone: document.getElementById('edit-phone').value,
        education: document.getElementById('edit-education').value,
        experience: document.getElementById('edit-experience').value,
        skills: document.getElementById('edit-skills').value
    };
    editModal.style.display = 'none';
    displayResume();
});
// Close modals
closeDisplayButton.addEventListener('click', function () { return displayModal.style.display = 'none'; });
closeEditButton.addEventListener('click', function () { return editModal.style.display = 'none'; });
