const form = document.getElementById('resume-form');
const resumeDisplay = document.getElementById('resume-display');
const displayModal = document.getElementById('display-modal');
const editModal = document.getElementById('edit-modal');
const closeDisplayButton = document.querySelector('.close-button');
const closeEditButton = document.querySelector('.close-edit-button');
const editButton = document.getElementById('edit-button');
const saveEditButton = document.getElementById('save-edit-button');
const downloadButton = document.getElementById('download-button');
const copyButton = document.getElementById('copy-button');
const shareLinkInput = document.getElementById('share-link');
const editFormContainer = document.getElementById('edit-form-container');

let resumeData = {};

// Handle form submission to generate resume and URL
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    resumeData = {
        username,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('experience').value,
        skills: document.getElementById('skills').value
    };

    // Generate a unique shareable link
    const shareableURL = `${window.location.origin}/${resumeData.username}`;
    shareLinkInput.value = shareableURL;

    displayResume();
});

// Display resume in the modal
function displayResume() {
    const { name, email, phone, education, experience, skills } = resumeData;

    const resumeHtml = `
        <div class="resume-container">
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;

    resumeDisplay.innerHTML = resumeHtml;
    displayModal.style.display = 'flex';
}

// Download resume as PDF
downloadButton.addEventListener('click', () => {
    const element = document.getElementById('resume-display');
    const opt = {
        margin: 1,
        filename: `${resumeData.username}-resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
});

// Copy shareable link to clipboard
copyButton.addEventListener('click', () => {
    shareLinkInput.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});

// Edit functionality
editButton.addEventListener('click', () => {
    const { name, email, phone, education, experience, skills } = resumeData;

    const editFormHtml = `
        <input type="text" id="edit-name" value="${name}" />
        <input type="email" id="edit-email" value="${email}" />
        <input type="tel" id="edit-phone" value="${phone}" />
        <textarea id="edit-education">${education}</textarea>
        <textarea id="edit-experience">${experience}</textarea>
        <textarea id="edit-skills">${skills}</textarea>
    `;

    editFormContainer.innerHTML = editFormHtml;
    displayModal.style.display = 'none';
    editModal.style.display = 'flex';
});

// Save edited data
saveEditButton.addEventListener('click', () => {
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
closeDisplayButton.addEventListener('click', () => displayModal.style.display = 'none');
closeEditButton.addEventListener('click', () => editModal.style.display = 'none');
