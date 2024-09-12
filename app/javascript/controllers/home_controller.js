import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="home"
export default class extends Controller {
  connect() {
    console.log("Connecting to data-controller");

    }
  run()
  {
    console.log("Done1");
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
   

  // Toggle sidebar and content visibility
  
    if (sidebar && content) {
      sidebar.classList.toggle('active');
      content.classList.toggle('active');
      console.log("Done2");
    } else {
      console.error("Sidebar or content not found in the DOM");
    }
  

  // Example: Toggle the sidebar when a button is clicked
  const toggleButton = document.querySelector('#toggle-sidebar-button');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleSidebar);
    console.log("Done3");
  }

  // Submenu toggle functionality
  const menuItems = document.querySelectorAll('.sidebar .nav-link[data-bs-toggle="collapse"]');
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
  
  }
}








