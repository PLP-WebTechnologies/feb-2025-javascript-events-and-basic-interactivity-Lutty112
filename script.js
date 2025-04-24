// Event Handling: Button Click
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button Clicked!");
  });
  
// Hover Effect
  document.getElementById("hoverBtn").addEventListener("mouseover", () => {
    document.getElementById("hoverBtn").style.backgroundColor = "yellow";
  });
  document.getElementById("hoverBtn").addEventListener("mouseout", () => {
    document.getElementById("hoverBtn").style.backgroundColor = "lightblue";
  });
  
// Keypress Detection
  document.getElementById("keypressInput").addEventListener("keypress", (event) => {
    console.log("Key pressed:", event.key);
  });
  
// Bonus: Secret Action - Double Click or Long Press
  let longPressTimer;
  const secretActionElement = document.getElementById("secretAction");
  
  secretActionElement.addEventListener("dblclick", () => {
    alert("Secret Double Click Detected!");
  });
  
  secretActionElement.addEventListener("mousedown", () => {
    longPressTimer = setTimeout(() => {
      alert("Long Press Detected!");
    }, 1500);
  });
  
  secretActionElement.addEventListener("mouseup", () => {
    clearTimeout(longPressTimer);
  });
  
// Interactive Button - Changes text and color
document.getElementById("colorBtn").addEventListener("click", () => {
    const btn = document.getElementById("colorBtn");
    btn.textContent = "Color Changed!";
    btn.style.backgroundColor = "lightcoral";
  });
  
  // Image Gallery - Hover effect
  const galleryImages = document.querySelectorAll(".gallery-image");
  galleryImages.forEach((image) => {
    image.addEventListener("mouseover", () => {
      image.style.transform = "scale(1.1)";
      image.style.transition = "transform 0.2s ease-in-out";
    });
    image.addEventListener("mouseout", () => {
      image.style.transform = "scale(1)";
    });
  });
  
  // Tabs - Switch content
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.getAttribute("data-target"));
      document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.style.display = "none";
      });
      target.style.display = "block";
    });
  });
  
  // Form Validation - Email, Password, Required Fields
document.getElementById("userForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let message = "";
  
    if (name === "") {
      message += "Name is required. ";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      message += "Please enter a valid email. ";
    }
    if (password.length < 8) {
      message += "Password must be at least 8 characters. ";
    }
  
    if (message) {
      document.getElementById("validationMessage").textContent = message;
    } else {
      document.getElementById("validationMessage").textContent = "Form submitted successfully!";
    }
  });
  
  // Real-time Feedback - Password Strength
  document.getElementById("password").addEventListener("input", () => {
    const password = document.getElementById("password").value;
    const message = password.length >= 8 ? "Password strength is good" : "Password is too weak";
    document.getElementById("validationMessage").textContent = message;
  });
  