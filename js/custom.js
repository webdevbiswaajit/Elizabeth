const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("dashboard_left");
const middle_none = document.getElementById("middle_none");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
  middle_none.classList.toggle("vanice");
};
