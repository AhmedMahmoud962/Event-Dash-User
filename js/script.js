document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const sidebar = document.querySelector("nav");
  const sidebarToggle = document.querySelector(".sidebar-toggle");

  // Dark mode toggle
  let getMode = localStorage.getItem("mode");
  if (getMode && getMode === "dark") {
    body.classList.add("dark");
  }

  // Sidebar toggle
  let getStatus = localStorage.getItem("status");
  if (getStatus && getStatus === "close") {
    sidebar.classList.add("close");
  }

  // Sidebar toggle functionality
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("close");
      const status = sidebar.classList.contains("close") ? "close" : "open";
      localStorage.setItem("status", status);
    });
  }
});

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});
