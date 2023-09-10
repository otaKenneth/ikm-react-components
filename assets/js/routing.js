function linkTo(strLinkName) {
    history.pushState(null, null, `#${strLinkName}`);
    loadContent(strLinkName)
}

$(document).ready(() => {
    // Check the URL hash on page load
    const hash = window.location.hash.substring(1); // Remove the "#" character
    if (hash) {
        loadContent(hash);
    } else {
        // Load the default content when there's no hash
        loadContent("home");
    }
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