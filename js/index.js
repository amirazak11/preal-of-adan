

$(".navbar-toggler").click(function () {
  $(".nav-item-res").animate({
    opacity: "1"
  }, 1000)
})

$(".closebtn").click(function () {
  $(".nav-item-res").animate({
    opacity: "0",
    marginBottom: "0px"
  },10);
})
$("#greyDiv").click(function () {
  $(".nav-item-res").animate({
    opacity: "0",
    marginBottom: "0px"
  },10);
})
$(document).ready(function () {
  $(".nav-item-res a").click(function (){
    $(".nav-item-res a.active").removeClass("active");
    $(this).addClass("active");
  });
});
document.getElementById("greyDiv").style.display = "none ";


function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
  document.getElementById("greyDiv").style.display = "block";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
  document.getElementById("greyDiv").style.display = "none ";


}


// $(document).ready(function() {
//   $("#toggleButton").click(function() {
//     $("#dropdownList").toggleClass("d-none");
//   });
// });

$(document).ready(function() {
  $(".card").click(function() {
    window.location.href = "detailspage.html";
  });
});


const sizeButtons = document.querySelectorAll('.size');

sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        sizeButtons.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('active');
            }
        });
        this.classList.toggle('active');
    });
});
const colorButtons = document.querySelectorAll('.color');

colorButtons.forEach(button => {
    button.addEventListener('click', function() {
      colorButtons.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('active');
            }
        });
        this.classList.toggle('active');
    });
});
const sectionButtons = document.querySelectorAll('.sectionwear');

sectionButtons.forEach(button => {
    button.addEventListener('click', function() {
      sectionButtons.forEach(btn => {

        });
        this.classList.toggle('active');
    });
});


