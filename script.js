// ===== MOBILE MENU =====
function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

// ===== BOOKING FORM VALIDATION =====
function submitForm() {
  var valid = true;

  // Get values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;
  var room = document.getElementById("room").value;
  var guests = document.getElementById("guests").value;

  // Clear old errors
  document.getElementById("name-err").textContent = "";
  document.getElementById("email-err").textContent = "";
  document.getElementById("phone-err").textContent = "";
  document.getElementById("checkin-err").textContent = "";
  document.getElementById("checkout-err").textContent = "";
  document.getElementById("room-err").textContent = "";
  document.getElementById("guests-err").textContent = "";

  // Check name
  if (name === "") {
    document.getElementById("name-err").textContent = "Please enter your name.";
    valid = false;
  }

  // Check email
  if (email === "") {
    document.getElementById("email-err").textContent = "Please enter your email.";
    valid = false;
  }

  // Check phone
  if (phone === "") {
    document.getElementById("phone-err").textContent = "Please enter your phone number.";
    valid = false;
  }

  // Check checkin
  if (checkin === "") {
    document.getElementById("checkin-err").textContent = "Please select a check-in date.";
    valid = false;
  }

  // Check checkout
  if (checkout === "") {
    document.getElementById("checkout-err").textContent = "Please select a check-out date.";
    valid = false;
  }

  // Check checkout is after checkin
  if (checkin !== "" && checkout !== "" && checkout <= checkin) {
    document.getElementById("checkout-err").textContent = "Check-out must be after check-in.";
    valid = false;
  }

  // Check room
  if (room === "") {
    document.getElementById("room-err").textContent = "Please select a room type.";
    valid = false;
  }

  // Check guests
  if (guests === "") {
    document.getElementById("guests-err").textContent = "Please select number of guests.";
    valid = false;
  }

  // If all valid show success
  if (valid === true) {
    document.getElementById("success-msg").style.display = "block";
    window.scrollTo(0, 0);
  }
}