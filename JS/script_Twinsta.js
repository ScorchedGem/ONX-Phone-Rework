TwinstaTab(0);
function TwinstaTab(index) {
    document.getElementById("tb-1").classList.toggle("T-Active-Tab", index === 0);
    document.getElementById("twinsta-p2").style.left = (index === 1 ? "0%" : "100%");
    document.getElementById("tb-2").classList.toggle("T-Active-Tab", index === 1);
    document.getElementById("twinsta-p3").style.left = (index === 2 ? "0%" : "100%");
    document.getElementById("tb-3").classList.toggle("T-Active-Tab", index === 2);
    document.getElementById("twinsta-p4").style.left = (index === 3 ? "0%" : "100%");
    document.getElementById("tb-4").classList.toggle("T-Active-Tab", index === 3);
}