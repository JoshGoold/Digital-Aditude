// Extended alphabet including lowercase, uppercase, and symbols for encryption
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
const symbols = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]", "?", "/", "<", ">", ".", ",", "~", "#", ":", ";", "|", "\\", "\"", "'", "`", "_", "£", "€", "¥", "¢", "∞", "§", "¶", "•", "ª", "º", "∆", "˚", "¬", "Ω", "≈", "√", "∫", "µ", "≤", "≥", "÷", "©", "®", "™", "✓", "✗", "✎", "✉", "★", "☆"];
const decrypt = ()=>{
    let encyptedMessage = "";
    const key = "^:$˚≤√:≥≤<*/√Ω≤~º"
    for(let i = 0; i < key.length; i++){
        const char = key.charAt(i);
        if (char === " ") encyptedMessage += " "
        else{
            const index = symbols.indexOf(char)
            if (index !== -1) {
                encyptedMessage += alphabet[index];
            } else {
                encyptedMessage += char; 
            }
            
        }
        
    }
    return encyptedMessage
}
  function sendEmail(e) {
    e.preventDefault(); // Prevent form submission

    const key = decrypt()
    emailjs.init(key); // Replace with your public key

    const params = {
        from_name: document.getElementById('first_name').value + " " + document.getElementById('last_name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_gsnky7h', 'template_kuoapcy', params)
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
