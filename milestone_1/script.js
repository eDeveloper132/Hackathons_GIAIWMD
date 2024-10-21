"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toggleButton = document.getElementById("toggle-skills");
const skills = document.getElementById('skills');
const darkModeButton = document.getElementById('toggle-darkmode');
const body = document.body;
toggleButton.addEventListener("click", () => {
    skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
});
darkModeButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode');
});
