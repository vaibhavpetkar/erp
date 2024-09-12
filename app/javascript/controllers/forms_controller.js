import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="forms"
export default class extends Controller {
  static targets = ["companyName", "companyNameError"]

  validate() {
    const companyNameInput = this.companyNameTarget.value;

    if (companyNameInput.length < 3) {
      this.companyNameErrorTarget.classList.remove("d-none"); // Show error
    } else {
      this.companyNameErrorTarget.classList.add("d-none"); // Hide error
    }
  }
}
