document.addEventListener("DOMContentLoaded", () => {
  const bookings = [
    {
      flight: "IndiGo 6E-102",
      route: "Hyderabad → Bengaluru",
      date: "2025-06-25",
      time: "06:00 AM - 07:30 AM",
      seat: "12A"
    },
    {
      flight: "Air India AI-203",
      route: "Delhi → Mumbai",
      date: "2025-06-28",
      time: "09:00 AM - 11:10 AM",
      seat: "8C"
    }
  ];

  const container = document.getElementById("booking-list");

  bookings.forEach((booking) => {
    const card = document.createElement("div");
    card.className = "booking-card";
    card.innerHTML = `
      <h3>${booking.flight}</h3>
      <p><strong>Route:</strong> ${booking.route}</p>
      <p><strong>Date:</strong> ${booking.date}</p>
      <p><strong>Time:</strong> ${booking.time}</p>
      <p><strong>Seat:</strong> ${booking.seat}</p>
    `;
    container.appendChild(card);
  });
});