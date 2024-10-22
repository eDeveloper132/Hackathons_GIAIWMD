const form = document.getElementById('resume-form');
const resumeDisplay = document.getElementById('resume-display');
const modal = document.getElementById('resume-modal');
const closeButton = document.querySelector('.close-button');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const ResumeHtml = `
        <div class="resume-container">
            <header class="resume-header">
                <h2>${name}</h2>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
            </header>
            <section class="resume-section">
                <h3>Education</h3>
                <p>${education}</p>
            </section>
            <section class="resume-section">
                <h3>Experience</h3>
                <p>${experience}</p>
            </section>
            <section class="resume-section">
                <h3>Skills</h3>
                <p>${skills}</p>
            </section>
        </div>
    `;

    resumeDisplay.innerHTML = ResumeHtml;
    modal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
