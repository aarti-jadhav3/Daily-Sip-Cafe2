const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("contactResponse");
const messageList = document.getElementById("messageList");

// Submit Contact Form
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    responseMessage.style.color = "red";
    responseMessage.textContent = "Please fill all fields.";
    return;
  }

  const contact = { name, email, message };

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  responseMessage.style.color = "green";
  responseMessage.textContent = "Message Sent Successfully!";

  contactForm.reset();
  loadMessages();
});

// Load Messages
function loadMessages() {
  messageList.innerHTML = "";

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  contacts.forEach(contact => {
    const li = document.createElement("li");
    li.textContent = `${contact.name} | ${contact.email} | ${contact.message}`;
    messageList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", loadMessages);