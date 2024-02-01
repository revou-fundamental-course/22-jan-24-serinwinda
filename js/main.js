const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const interest = document.getElementById("interest").value;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Interest: ${interest}`);

  alert("Thank you for your interest! Our sales team will contact you within 24 hours.");

  form.reset();
});