const form = document.getElementById('submissionForm');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData.get('email'))
    console.log(formData.get('repoURL'))
}