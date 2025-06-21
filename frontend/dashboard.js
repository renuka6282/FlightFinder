document.addEventListener("DOMContentLoaded", () => {
  const totalFlights = 10;
  const totalBookings = 25;
  const usersLoggedIn = 5;

  document.getElementById("total-flights").querySelector("p").textContent = totalFlights;
  document.getElementById("total-bookings").querySelector("p").textContent = totalBookings;
  document.getElementById("users-logged-in").querySelector("p").textContent = usersLoggedIn;
});