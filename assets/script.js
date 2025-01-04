document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.getElementById('contact');
    const showContactButton = document.createElement('button');
    showContactButton.textContent = "Show Contact Info";
    showContactButton.addEventListener('click', function() {
        contactSection.classList.toggle('show');
    });
    
    document.body.insertBefore(showContactButton, contactSection);
});
