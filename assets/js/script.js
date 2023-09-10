$(document).ready(() => {
    $('#navigation #left-nav a').click((e) => {
        e.preventDefault();
        $('#navigation #left-nav a').removeClass('active');
        $(e.target).addClass('active');
    })
})