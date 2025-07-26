function TwinstaTab(index) {
    document.getElementById("tb-1").classList.toggle("T-Active-Tab", index === 0);
    document.getElementById("twinsta-p2").style.left = (index === 1 ? "0%" : "100%");
    document.getElementById("tb-2").classList.toggle("T-Active-Tab", index === 1);
    document.getElementById("twinsta-p3").style.left = (index === 2 ? "0%" : "100%");
    document.getElementById("tb-3").classList.toggle("T-Active-Tab", index === 2);
    document.getElementById("twinsta-p4").style.left = (index === 3 ? "0%" : "100%");
    document.getElementById("tb-4").classList.toggle("T-Active-Tab", index === 3);
}

// Add this function to your JavaScript code
function toggleButton(button) {
    // Toggle the active class
    button.classList.toggle('T-Post-F-Button-Active');

    // Find the icon element within the button
    const icon = button.querySelector('i');
            console.log("test");

    // Toggle between solid and regular icons for heart
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
}

// Add event listeners to all buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.T-Post-Footer-Button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            toggleButton(this);
        });
    });
});

TwinstaTab(0);