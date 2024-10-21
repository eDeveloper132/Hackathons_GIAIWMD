var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById('skills');
var darkModeButton = document.getElementById('toggle-darkmode');
var body = document.body;
toggleButton.addEventListener("click", function () {
    skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
});
darkModeButton.addEventListener("click", function () {
    body.classList.toggle('dark-mode');
});
