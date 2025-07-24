function swapTab(index) {
    switch (index) {
        case 0:
            document.getElementById("pages-wrapper").style.left = "0%";
            document.getElementById("tracking").classList.add("tracker-active")
            document.getElementById("tracked-by").classList.remove("tracker-active")
            break;
            case 1:
            document.getElementById("pages-wrapper").style.left = "-100%";
            document.getElementById("tracking").classList.remove("tracker-active")
            document.getElementById("tracked-by").classList.add("tracker-active")
            break;
    }
}

function resolveAfterSeconds(second) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, second * 1000);
    });
}

async function updateGPS() {
    document.getElementById("gpsmark")?.classList.add("track-notif-ping-active");
    await resolveAfterSeconds(1);
    document.getElementById("gpsmark")?.classList.remove("track-notif-ping-active");
}