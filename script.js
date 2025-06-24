//Menubar Contact Us Button
// Function to create the "Contact Us" button
function createContactButton() {
    // Create a link element for the button
    const button = document.createElement('a');
    // Set the attributes for the button
    button.innerText = 'Contact Us';
    button.href = 'contact.html'; // Link to contact page
    button.className = 'nav-link btn text-white bg-dark px-3 rounded-0'; // Add Bootstrap classes

    // Append the button to the contact-container
    document.getElementById('contact-container').appendChild(button);
}

// Call the function to create the button after the DOM is loaded
document.addEventListener('DOMContentLoaded', createContactButton);
