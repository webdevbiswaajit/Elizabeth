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
      var element = document.getElementById("msg_scroll");
      element.scrollTop = element.scrollHeight;
    }
  });
});

$("#OpenImgUpload").click(function () {
  $("#preview_item").fadeToggle();
});
// =======================File-Upload===============
$("#upload_btn").click(function () {
  $("#file_upload").trigger("click");
});
// ==========Link upload===============
$("#link_btn").click(function () {
  $("#link_upload").fadeToggle();
});
$(".link_field").blur(function () {
  if (!$(".link_field").hasClass("hidden")) {
    $(".link_field").addClass("hidden");
  }
});
// =================================msg scroll============

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

jQuery(document).ready(function () {
  ImgUpload();
});

function ImgUpload() {
  var imgWrap = "";
  var imgArray = [];

  $(".upload__inputfile").each(function () {
    $(this).on("change", function (e) {
      imgWrap = $(this).closest(".upload__box").find(".upload__img-wrap");
      var maxLength = $(this).attr("data-max_length");

      var files = e.target.files;
      var filesArr = Array.prototype.slice.call(files);
      var iterator = 0;
      filesArr.forEach(function (f, index) {
        if (!f.type.match("image.*")) {
          return;
        }

        if (imgArray.length > maxLength) {
          return false;
        } else {
          var len = 0;
          for (var i = 0; i < imgArray.length; i++) {
            if (imgArray[i] !== undefined) {
              len++;
            }
          }
          if (len > maxLength) {
            return false;
          } else {
            imgArray.push(f);

            var reader = new FileReader();
            reader.onload = function (e) {
              var html =
                "<div class='upload__img-box'><div style='background-image: url(" +
                e.target.result +
                ")' data-number='" +
                $(".upload__img-close").length +
                "' data-file='" +
                f.name +
                "' class='img-bg'><div class='upload__img-close'></div></div></div>";
              imgWrap.append(html);
              iterator++;
            };
            reader.readAsDataURL(f);
          }
        }
      });
    });
  });

  $("body").on("click", ".upload__img-close", function (e) {
    var file = $(this).parent().data("file");
    for (var i = 0; i < imgArray.length; i++) {
      if (imgArray[i].name === file) {
        imgArray.splice(i, 1);
        break;
      }
    }
    $(this).parent().parent().remove();
  });
}

// ========================Ckd Editor====================

CKEDITOR.replace("editor1", {
  height: 150,
  width: 560,
  removeButtons: "PasteFromWord",
  removeButtons: "Source",
  removeButtons: "Maximize",
});
