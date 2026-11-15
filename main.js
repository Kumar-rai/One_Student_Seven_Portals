// Navigation menu and configurable official portal destinations.
// Add verified URLs below before publishing. Do not use unofficial or guessed links.
const PORTAL_LINKS = {
  attendance: "", // Example: "https://official-institution-domain.example/attendance"
  results: ""     // Example: "https://official-institution-domain.example/results"
};

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".portal-button").forEach((button) => {
    const key = button.dataset.portal;
    const url = PORTAL_LINKS[key];
    const status = button.parentElement.querySelector(".portal-status");
    if (url && /^https:\/\//i.test(url)) {
      button.href = url;
      if (status) status.textContent = "Opens the configured official destination in a new tab.";
    } else {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        if (status) status.textContent = "Portal link not configured yet. Add and verify the official URL in js/main.js.";
      });
    }
  });
});
