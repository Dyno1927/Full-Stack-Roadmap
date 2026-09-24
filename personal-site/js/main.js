// Theme toggle: dark is default, light is opt-in. Saved so the choice
// sticks across visits. Plain JS, no dependencies.

(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  // Restore saved theme (or keep default dark).
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);

  function current() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  toggle.addEventListener("click", function () {
    const next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // Footer year.
  document.getElementById("year").textContent = new Date().getFullYear();
})();