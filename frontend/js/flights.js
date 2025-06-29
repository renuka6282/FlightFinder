const flights = [
  {
    flightNo: "6E-102",
    airline: "IndiGo",
    from: "Hyderabad",
    to: "Bengaluru",
    time: "06:00 AM - 07:30 AM",
    price: 4299
  },
  {
    flightNo: "AI-203",
    airline: "Air India",
    from: "Delhi",
    to: "Mumbai",
    time: "09:00 AM - 11:10 AM",
    price: 5799
  },
  {
    flightNo: "SG-504",
    airline: "SpiceJet",
    from: "Chennai",
    to: "Kochi",
    time: "05:15 PM - 06:10 PM",
    price: 3950
  }
];

const searchBtn = document.querySelector(".search-btn");
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");
const flightsContainer = document.getElementById("flightsContainer");

function displayFlights(filteredFlights) {
  flightsContainer.innerHTML = "";

  if (filteredFlights.length === 0) {
    flightsContainer.innerHTML = "<p>No flights found.</p>";
    return;
  }

  filteredFlights.forEach(flight => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-header">
        <h3>${flight.airline} ${flight.flightNo}</h3>
        <span>₹${flight.price.toLocaleString()}</span>
      </div>
      <p>${flight.from} → ${flight.to}</p>
      <p>${flight.time}</p>
      <button>Book Now</button>
    `;

    flightsContainer.appendChild(card);
  });
}

searchBtn.addEventListener("click", () => {
  const fromVal = fromInput.value.trim().toLowerCase();
  const toVal = toInput.value.trim().toLowerCase();

  const filtered = flights.filter(flight =>
    flight.from.toLowerCase().includes(fromVal) &&
    flight.to.toLowerCase().includes(toVal)
  );

  displayFlights(filtered);
});

// Initial render
displayFlights(flights);
