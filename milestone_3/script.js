var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var modal = document.getElementById('resume-modal');
var closeButton = document.querySelector('.close-button');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var ResumeHtml = "\n        <div class=\"resume-container\">\n            <header class=\"resume-header\">\n                <h2>".concat(name, "</h2>\n                <p>Email: ").concat(email, "</p>\n                <p>Phone: ").concat(phone, "</p>\n            </header>\n            <section class=\"resume-section\">\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n            </section>\n            <section class=\"resume-section\">\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n            </section>\n            <section class=\"resume-section\">\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </section>\n        </div>\n    ");
    resumeDisplay.innerHTML = ResumeHtml;
    modal.style.display = 'flex';
});
closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
});
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
