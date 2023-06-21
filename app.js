const form = document.getElementById('submissionForm');

form.addEventListener('submit', formSubmit);

async function formSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData.get('email'))
    console.log(formData.get('repoURL'))
    const data = new URLSearchParams(formData);

    try {
        // using service to confirm that the correct data is being sent
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: data,
        });

        let responseData;
        if (response.ok) {
            responseData = await response.json();
            console.log(responseData);
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