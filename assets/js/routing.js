function linkTo(strLinkName) {
    history.pushState(null, null, `#${strLinkName}`);
    loadContent(strLinkName)
}

$(document).ready(() => {
    $("#content").load("pages/home.html");

    // Handle the browser's back/forward navigation
    window.addEventListener("popstate", function (e) {
        console.log(e);

        let arloc = this.location.pathname.split("#");
        let new_path = arloc[arloc.length - 1];
        loadContent(new_path)
    });
})

function loadContent (str) {
    switch (str) {
        case "cart":
            $("#content").load("pages/cart.html");
            break;
    
        default:
            $("#content").load("pages/home.html");
            break;
    }
}