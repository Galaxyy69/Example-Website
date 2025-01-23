// Function to open the payment menu
function openMenu(plan, price) {
    const menu = document.getElementById("payment-menu");
    const planText = document.getElementById("selected-plan");
    planText.textContent = `Selected Plan: ${plan}`;
    
    menu.style.display = "flex"; // Show the menu
  }
  
  // Function to close the payment menu
  function closeMenu() {
    const menu = document.getElementById("payment-menu");
    menu.style.display = "none"; // Hide the menu
  }
  