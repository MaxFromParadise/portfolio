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
    function modalValidate(classValid){
        $(classValid).validate({
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                text: "required",
                onfocusout: true
            },
            messages: {
                name: "Введите своё имя",
                email: {
                  required: "После с email должно быть заполнено!",
                  email: "Ваш email должен быть в формате name@domain.com!"
                },
                text: "Введите сообщение"
            }
        });
    };
    modalValidate("#contacts-form");
    $("form").submit(function(e){
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
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