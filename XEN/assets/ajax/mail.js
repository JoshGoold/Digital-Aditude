const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const symbols = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]", "?", "/", "<", ">", ".", ",", "~", "#", ":", ";"]
const decrypt = ()=>{
    let encyptedMessage = "";
    const key = ".//.*;}/.!>$;?{-?"
    for(let i = 0; i < key.length; i++){
        const char = key.toLowerCase().charAt(i);
        if (char === " ") encyptedMessage += " "
        else{
            const index = symbols.findIndex(letter => letter === char)
            if(symbols[index-1] === undefined){
                encyptedMessage += alphabet[25];
            } else{
                encyptedMessage += alphabet[index - 1];
            }
            
        }
        
    }
    return encyptedMessage
}
  function sendEmail(e) {
    e.preventDefault(); // Prevent form submission

    // const key = decrypt()
    emailjs.init('TQqtfymqt8SBYPLIp'); // Replace with your public key

    const params = {
        from_name: document.getElementById('first_name').value,
        from_name: document.getElementById('last_name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_pt2tzak', 'template_9gy36sg', params)
        .then(function(response)   
 {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully")
            window.location.reload();
            // Handle success, e.g., display a success message
        }, function(error) {
            console.log('FAILED...', error);
            // Handle error, e.g., display an error message
        });
}

document.getElementById('send').addEventListener('click', sendEmail);
