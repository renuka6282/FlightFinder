function addFlight() {
  const name = document.getElementById("flightName").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const time = document.getElementById("time").value;
  const price = document.getElementById("price").value;

  console.log("New Flight Added:", {
    name, from, to, time, price
  });

  document.getElementById("success-message").textContent = "Flight added successfully!";

  document.querySelector("form").reset();

  return false; 
}