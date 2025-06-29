// js/navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
    <nav class="navbar">
      <div class="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/681/681494.png" alt="Flight Logo" style="height: 30px; vertical-align: middle; margin-right: 8px;">
        <span class="logo-title">AirEase</span>
      </div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="flights.html">Flights</a></li> 
        <li><a href="bookings.html">Bookings</a></li>
        <li><a href="newflights.html">New Flights</a></li>
        <li><a href="dashboard.html">Dashboard</a></li>
        <li><a href="help.html">Help</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="auth-buttons">
        <a href="login.html"><button>Login</button></a>
        <a href="signup.html"><button>Sign Up</button></a>
      </div>
    </nav>
  `;

  document.getElementById("navbar").innerHTML = navbarHTML;
});
