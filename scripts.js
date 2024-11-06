
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const messageDiv = document.querySelector('.newsletter .message');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        if (emailInput.value) {
            
            messageDiv.textContent = `Thank you! Your email address ${emailInput.value} has been added to our mailing list!`;
            messageDiv.style.color = "green"; 
        } else {
            
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red"; 
        }

       
        emailInput.value = '';
    });
});
