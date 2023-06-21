const form = document.getElementById('submissionForm');

form.addEventListener('submit', formSubmit);

async function formSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const githubRepoUrl = formData.get('githubRepoUrl');
    const data = JSON.stringify({ email, githubRepoUrl });

    try {
        const response = await fetch('https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data,
        });

        let responseData;
        if (response.ok) {
            responseData = await response.json();
            // Added alert to confirm that the form was submitted successfully, would typically redirect to another page
            alert('Form submitted successfully!');
        } else {
            throw new Error('Request failed: status ' + response.status);
        }
    } catch (error) {
        console.log('An error occurred:', error);
    }
    form.reset();
}