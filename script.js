document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Fade in on load
  body.classList.add("loaded");

  // Theme toggle (safe)
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
      toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  // Page transitions
  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (
      href &&
      !href.startsWith("http") &&
      !href.startsWith("#") &&
      !link.hasAttribute("target")
    ) {
      link.addEventListener("click", e => {
        e.preventDefault();

        body.classList.remove("loaded");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });
});
