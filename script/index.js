var hiddenElement = document.getElementById("services");
var btn = document.querySelector('.services-button');
function handleButtonClick() {
    hiddenElement.scrollIntoView({ block: "start", behavior: "smooth" });
}
btn.addEventListener('click', handleButtonClick);



//back to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});