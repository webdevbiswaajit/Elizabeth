const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("dashboard_left");
const middle_none = document.getElementById("middle_none");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
  middle_none.classList.toggle("vanice");
};

// =====================sideBarLink===============
$(document).ready(function () {
  $("#toggle").click(function () {
    $(".h_link").fadeToggle("slow");
  });
});
$(document).ready(function () {
  $("#toggle").click(function () {
    $(".show_arrow").fadeToggle("slow");
  });
});
