const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // Send the form data to the server or some other logic here
  console.log('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
});
