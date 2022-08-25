const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("dashboard_left");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
};
