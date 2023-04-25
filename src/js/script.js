function changePage(arg) {
    console.log(window.location.host)
    if (window.location.pathname != document.location.origin + arg) {
        window.location.pathname = document.location.origin + arg;
    }
}