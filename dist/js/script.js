const hamburger = document.querySelector(".hamburger"),
      navbar = document.querySelector(".navbar"),
      closeMenu = document.querySelector(".navbar__close");

hamburger.addEventListener("click", () => {
    navbar.classList.add("active")
});
closeMenu.addEventListener("click", () => {
    navbar.classList.remove("active")
});
const counters = document.querySelectorAll(".level__item-header_percentage"),
      lines = document.querySelectorAll(".level__item-progress_full");
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $("form").trigger("reset");
            return false;
        });
    });
});