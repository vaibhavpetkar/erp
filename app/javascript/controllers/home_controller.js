import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="home"
export default class extends Controller {
  connect() {
    console.log("Connecting to data-controller");

    }
  run()
  {
      const sidebar = document.querySelector('.sidebar');
      const content = document.querySelector('.content');
  
      if (sidebar && content) {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
        
      } else {
        console.error("Sidebar or content not found in the DOM");
      }
      
      // Submenu toggle functionality
      const menuItems = document.querySelectorAll('.sidebar .nav-link[data-bs-toggle="collapse"]');
      menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          const submenu = this.nextElementSibling;
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
      });
    }
}