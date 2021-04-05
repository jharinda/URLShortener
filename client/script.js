const linkForm = document.querySelector('#linkForm');

linkForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(linkForm);

    const enteredUrl = formData.get('link');

    const submitBody = {
        link: enteredUrl
    };

    const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitBody)
    });

    const data = await response.json();

    console.log(data);
    const a = document.createElement('a');
    a.innerText = 'asdasda';
    a.href = data.redirectUrl;
    a.target = '_blank';
    document.querySelector('#generatedLink').appendChild(a);
});