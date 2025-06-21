function loginUser() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  if (email === "user@example.com" && password === "123456") {
    alert("Login successful!");
    window.location.href = "index.html"; 
  } else {
    alert("Invalid credentials!");
  }

  return false; 
}