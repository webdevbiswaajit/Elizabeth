const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("dashboard_left");
const middle_none = document.getElementById("middle_none");
const msg_search = document.getElementById("msg_search");

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
// =====================searchBox===========

$(document).ready(function () {
  $("#hidebtn").click(function () {
    $("#dashboard_left ").toggle();
  });
});

// =============================Message-functionality===================

$("#OpenImgUpload").click(function () {
  $("#imgupload").trigger("click");
});

$(document).ready(() => {
  $("#imgupload").change(function () {
    const file = this.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        $("#imgPreview").attr("src", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
});

$("#OpenImgUpload").click(function () {
  $("#preview_item").fadeToggle();
});

//scroll to the bottom of "#myDiv"
$("#msg_scroll").animate({
  scrollTop: $("#msg_scroll").prop("scrollHeight"),
});
// =============Converion search===============
$("#msg_search").click(function (e) {
  e.preventDefault();
  $(".msg_search_input").toggleClass("hidden");
});

$(".msg_search_input").blur(function () {
  if (!$(".msg_search_input").hasClass("hidden")) {
    $(".msg_search_input").addClass("hidden");
  }
});

// ===========================Message-and===============

// Dropdown toggle
$("#msg_menu").click(function () {
  $(this).next(".doth_menu").slideToggle();
});
// Report a problem
$("#report_info").click(function () {
  $(this).next(".msg_tool_tip").slideToggle();
});

$(document).click(function (e) {
  var target = e.target;
  if (!$(target).is("#msg_menu") && !$(target).parents().is("#msg_menu")) {
    //{ $('.dropdown').hide(); }
    $(".doth_menu").slideUp();
  }
  if (
    !$(target).is("#report_info") &&
    !$(target).parents().is("#report_info")
  ) {
    //{ $('.dropdown').hide(); }
    $(".msg_tool_tip").slideUp();
  }
});
// =================================
