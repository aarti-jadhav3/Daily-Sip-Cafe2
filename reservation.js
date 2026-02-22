const form = document.getElementById("reservationForm");
const message = document.getElementById("message");
const reservationList = document.getElementById("reservationList");

// Load reservations when page loads
document.addEventListener("DOMContentLoaded", loadReservations);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  if (!name || !phone || !date || !time || !guests) {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  const reservation = { name, phone, date, time, guests };

  let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  reservations.push(reservation);
  localStorage.setItem("reservations", JSON.stringify(reservations));

  message.style.color = "green";
  message.textContent = "Reservation Saved Successfully!";

  form.reset();
  loadReservations();
});

function loadReservations() {
  reservationList.innerHTML = "";

  let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  reservations.forEach((res, index) => {
    const li = document.createElement("li");
    li.textContent =
      `${res.name} | ${res.phone} | ${res.date} | ${res.time} | Guests: ${res.guests}`;
    reservationList.appendChild(li);
  });
}