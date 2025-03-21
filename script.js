'use strict';

// Function to toggle class
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length > 0 && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      formBtn.disabled = !form.checkValidity();
    });
  });
}
// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navigationLinks.length > 0 && pages.length > 0) {
  navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navigationLinks.forEach(nav => nav.classList.remove("active"));
      pages.forEach(page => page.classList.remove("active"));

      this.classList.add("active");
      const pageName = this.textContent.trim().toLowerCase();
      const targetPage = document.querySelector(`[data-page="${pageName}"]`);

      if (targetPage) targetPage.classList.add("active");
      window.scrollTo(0, 0);
    });
  });
}
