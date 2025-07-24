function notifPopupHide() {
    if (document.getElementById("nw").children.length > 0) {
        document.getElementById("nw").children[0].style.transform = "translateY(-14vh)";
    }
}

function resolveAfterSeconds(second) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, second * 1000);
    });
}

function waitForFrame() {
    return new Promise(resolve => {
        requestAnimationFrame(resolve);
    });
}

async function notifPopup() {

    if (document.getElementById("nw").children.length > 0) {
        document.getElementById("nw").children[0].style.transform = "none";
    }
    await resolveAfterSeconds(3);
    if (document.getElementById("nw").children.length > 0) {
        document.getElementById("nw").children[0].style.transform = "translateY(-14vh)";
    }
}

function notifDelete(notifID) {
    document.getElementById(notifID).remove();
}

let notifScreen = false;

function notifScreenToggle() {
    if (notifScreen) {
        document.getElementById("notif-page").classList.remove("npw-open");
    } else {
        notifPopupHide();
        document.getElementById("notif-page").classList.add("npw-open");
    }
    notifScreen = !notifScreen
}

function notifScreenClose() {
    document.getElementById("notif-page").classList.remove("npw-open");
    document.getElementById("notif-bar").style.display = "flex";
    notifScreen = false;
}

async function appLoad(index, notifID) {
    if (document.getElementById("appElementID")) {
        await appClose();
    }

    notifScreenClose();

    let child = document.createElement("div");
    const elementRef = document.getElementById("phone-box").insertBefore(child, document.getElementById("phone-box").children[0]);
    elementRef.className = "Info-Background"
    elementRef.id = "appElementID";

    let importTag = document.createElement('link');
    importTag.setAttribute('rel', 'stylesheet');

    if (notifID) {
        notifDelete(notifID);
        index *= -1;
    }

    if (index === 0) {
        importTag.setAttribute('href', '../Styles/style_Info.css');
        importTag.id = "importTagID";
        document.body.appendChild(importTag);

        const response = await fetch('../Pages/main_Information.html');
        elementRef.innerHTML = await response.text();

    } else if (index === 1) {
        importTag.setAttribute('href', '../Styles/style_Pinger.css');
        importTag.id = "importTagID";
        document.body.appendChild(importTag);

        const response = await fetch('../Pages/main_Pinger.html');
        elementRef.innerHTML = await response.text();
    } else if (index === 3) {
        importTag.setAttribute('href', '../Styles/style_Directory.css');
        importTag.id = "importTagID";
        document.body.appendChild(importTag);

        if (!document.getElementById("importScriptID")) {
            let importScriptTag = document.createElement('script');
            importScriptTag.id = "importScriptID";
            importScriptTag.src = '../JS/script_Directory.js';
            document.body.appendChild(importScriptTag);
        } else {
            await window.onload(onStart());
        }

        const response = await fetch('../Pages/main_Directory.html');
        elementRef.innerHTML = await response.text();
    } else if (index === 4) {
        importTag.setAttribute('href', '../Styles/style_Twinsta.css');
        importTag.id = "importTagID";
        document.body.appendChild(importTag);

        /*if (!document.getElementById("importScriptID")) {
            let importScriptTag = document.createElement('script');
            importScriptTag.id = "importScriptID";
            importScriptTag.src = '../JS/script_Twinsta.js';
            document.body.appendChild(importScriptTag);
        } else {
            await window.onload(onStart());
        }*/

        const response = await fetch('../Pages/main_Twinsta.html');
        elementRef.innerHTML = await response.text();
    } else if (index === 9) {
        importTag.setAttribute('href', '../Styles/style_Calculator.css');
        importTag.id = "importTagID";
        document.body.appendChild(importTag);

        const response = await fetch('../Pages/main_Calculator.html');
        elementRef.innerHTML = await response.text();
    } else if (index === 11) {
        importTag.setAttribute('href', '../Styles/style_Settings.css');
        importTag.id = "importTagID";
        document.body.appendChild(importTag);

        if (!document.getElementById("importScriptID_Settings")) {
            let importScriptTag = document.createElement('script');
            importScriptTag.id = "importScriptID_Settings";
            importScriptTag.src = '../JS/script_Settings.js';
            document.body.appendChild(importScriptTag);
        }

        const response = await fetch('../Pages/main_Settings.html');
        elementRef.innerHTML = await response.text();
    } else if (index === 12) {
        importTag.setAttribute('href', '../Styles/style_Contacts.css');
        importTag.id = "importTagID";
        document.body.appendChild(importTag);

        if (!document.getElementById("importScriptID_Contacts")) {
            let importScriptTag = document.createElement('script');
            importScriptTag.id = "importScriptID";
            importScriptTag.src = '../JS/script_Contacts.js';
            document.body.appendChild(importScriptTag);
        }


        const response = await fetch('../Pages/main_Contacts.html');
        elementRef.innerHTML = await response.text();
    }
    await waitForFrame();
    await waitForFrame();
    await waitForFrame();
    if (elementRef.classList.contains('Info-Background'))
        elementRef.classList.add("transitioning-app");
}

async function appClose() {

    document.getElementById("appElementID").classList.remove("transitioning-app");
    document.getElementById("appElementID").classList.add("closing-app");
    await resolveAfterSeconds(0.075);
    document.getElementById("appElementID").remove();
    document.getElementById("importTagID").remove();

}