function swapContactsTab(index) {
    switch (index) {
        case 0:
            document.getElementById("co-pages-wrapper").style.left = "0%";
            break;
        case 1:
            document.getElementById("co-pages-wrapper").style.left = "-100%";
            break;
    }
}