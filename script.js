const form = document.querySelector('form');

form.onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('from').value;
    const domain = email.split('@')[1];
    
    if (domain !== 'duck.com') {
        alert('First email should have domain `duck.com`');
    }
    else {
        const result = document.getElementById('result');
        const toEmail = document.getElementById('to').value;
        const convertEmail = email => email.replace('@', '_at_');
        let resultEmail = convertEmail(toEmail);
        resultEmail = resultEmail + "_" + email;
        const resultDiv = document.getElementById('output');
        resultDiv.innerHTML = `<h2>Result</h2><p id="result" title="Click to Copy" data-clipboard-target="#result"> ${resultEmail} </p>`;
        let clipboard = new ClipboardJS('#result');
    }
};