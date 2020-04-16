//меню навигации
var services = document.getElementById("services");
var servicesButton = document.querySelector('.services-button');
var contacts = document.getElementById("contacts");
var contactsButton = document.querySelector('.contacts-button');
var officesButton = document.querySelector('.offices-button');
function servicesButtonClick() {
    services.scrollIntoView({ block: "start", behavior: "smooth" });
}
function contactsButtonClick() {
    contacts.scrollIntoView({ block: "start", behavior: "smooth" });
}
servicesButton.addEventListener('click', servicesButtonClick);
contactsButton.addEventListener('click', contactsButtonClick);
officesButton.addEventListener('click', contactsButtonClick);


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