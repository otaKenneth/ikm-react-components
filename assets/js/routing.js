function linkTo(strLinkName) {
    history.pushState(null, null, `${strLinkName}`);
}

$(document).ready(() => {

    // Handle the browser's back/forward navigation
    window.addEventListener("popstate", function (e) {
        switch (this.location.pathname) {
            case "cart":
                $("#content").load("cart.html");
                break;
        
            default:
                $("#content").load("pages/home.html");
                break;
        }
    });
})