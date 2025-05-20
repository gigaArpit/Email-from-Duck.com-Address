const form = document.querySelector('form');
const emailError = document.getElementById('emailError');
const resultDiv = document.getElementById('output');

form.onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('from').value;
    const domain = email.split('@')[1];
    
    if (domain !== 'duck.com') {
        emailError.textContent = 'First email should have domain `duck.com`';
        resultDiv.innerHTML = '';
    }
    else {
        emailError.textContent = '';
        const toEmail = document.getElementById('to').value;
        const convertEmail = email => email.replace('@', '_at_');
        let resultEmail = convertEmail(toEmail);
        resultEmail = resultEmail + "_" + email;
        resultDiv.innerHTML = `<h2>Result</h2><p id="result" title="Click to Copy" data-clipboard-target="#result"> ${resultEmail} </p>`;
        let clipboard = new ClipboardJS('#result');
    }
};