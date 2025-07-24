let searchVis = false;
let entryPanel = -1;
let newNoteVis = false;
let settingsVis = false;
let favColorVis = false;

const directoryList = ['#B6F3A5', '#F0F3BD', '#817F82', '#999999', '#F05675', '#E0D8DE', '#88C4E7', '#FE484B', '#EDCB96', '#EC9C46'];

const directoryEntry =
    [
        "💐Bloom & Harvest Flower Shop | New Golden Hour bouquet in stock!☀️🌈\n \n Micah Rain",
        "🏎️WrenLine Motors🚘 Classic speed. Timeless style.‎🔥📞 Call, or text now!",
        "🚑🚒EMS IS NOW HIRING | Check MDW applications to apply! | We also sell a lot! 📷🔦🤿🩹 | 🚒🚑",
        "♊︎ Gemini Towing & Parking 💚 Towing and Impound Release",
        "I Farm, I Fix Car, I Paint Car, I Gas Car, I Sunday!! Grapeseed!!"
    ]

function resolveAfterSeconds(second) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, second * 1000);
    });
}

async function onStart(){
    await resolveAfterSeconds(0.5);
        document.getElementById("banner").style.top = '0%';
        document.getElementById("banner").style.transition = 'all 300ms';
    loadPage();
}

function closePage() {
    document.getElementById("banner").style.top = '0%';
    document.getElementById("banner").style.transition = 'all 300ms';
}

window.onload(onStart());

function loadPage() {
    document.getElementById("banner").style.top = '100%';

    const arrayI = ['Agriculture', 'Entertainment', 'Mechanics', 'News', 'PDM', 'Publishing', 'Real Estate', 'Restaurant', 'Taxi', 'Tow'];
    let j = 0;

    for (let i = 0; i < 10; i++) {
        j = Math.random() * 10;

        let tempRef = document.getElementById("entry-list").innerHTML;
        let k = Math.random() * 10;

        if (k > 1)
        {
            var temp = directoryEntry.at(Math.random() * 4);
            document.getElementById("entry-list").innerHTML = tempRef + `
            <div class="LL-Box-Wrapper">
            <div class="LL-Box">
            <div style="width: 100%; height: 100%;">
            <div class="LL-subbox">
            <div style="display: flex; flex-direction: column; row-gap: 0.5vh;">
            <div class="LL-subbox-title">
            <h1>${arrayI.at(j)}</h1><i class="fa-solid fa-location-dot i-contact" style="justify-content: center; display: flex; font-size: 1.8vh;"></i>
            </div>
            <h2 style="margin-top: 4px;">` + temp + `</h2>
            </div>
            <div style="display: grid; grid-template-columns: 0.9fr 0.1fr; margin-top: 10px; border-top: #ffffff0d solid 0.3vh;">
            <h2 style="display: flex; padding-top: 8px; padding-left: 6px; font-style: italic">Sydney Harper</h2>
            <h2 style="padding-top:8px; justify-content: center; display: flex;"><i class="fa-solid fa-phone i-contact" style="transform: translateY(0.2vh);"></i></h2>
            </div>
            </div>
            </div>
            `;
        }
        else{
            document.getElementById("entry-list").innerHTML = tempRef + `
            <div class="LL-Box-Wrapper">
            <div class="LL-Box">
            <div style="width: 100%; height: 100%;">
            <div class="LL-subbox">
            <div style="display: flex; flex-direction: column; row-gap: 0.5vh;">
            <div class="LL-subbox-title"><h1>Sydney Harper</h1><i class="fa-solid fa-phone i-contact" style="justify-content: center; display: flex; font-size: 1.8vh;"></i></div>
            <h2 style="margin-top: 0.75vh;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>
            </div>
            </div>
            </div>
            `;
        }
    }
}

function toggleNewNoteSelector() {
    newNoteVis = !newNoteVis;
    if (newNoteVis) {
        document.getElementById("ee1").style.bottom = "0vh";
        document.getElementById("ee2").style.bottom = "0vh";
    }
    else {
        document.getElementById("ee1").style.bottom = "12vh";
        document.getElementById("ee2").style.bottom = "12vh";
    }
}

function toggleSearch() {
    searchVis = !searchVis;
    if (searchVis) {
        // Show Search
        document.getElementById('search-bar').classList.add("active");

        // Hide Settings
        if (settingsVis) toggleSettingsPanel();

        // Hide Buttons
        document.getElementById('btn1').style.visibility = 'hidden';
        document.getElementById('btn2').style.visibility = 'hidden';
        document.getElementById('btn3').style.visibility = 'visible';
    }
    else {
        // Hide Search
        document.getElementById('search-bar').classList.remove("active");

        // Show Buttons
        document.getElementById('btn1').style.visibility = 'visible';
        document.getElementById('btn2').style.visibility = 'visible';
        document.getElementById('btn3').style.visibility = 'visible';
    }
}

function toggleNewPost(index) {
    entryPanel = index;

    switch (index) {
        // Work
        case 0:
            document.getElementById('new-entry-work').style.bottom = 0;
            document.getElementById('new-entry').style.bottom = "-50%";
            break;
        // Personal
        case 1:
            document.getElementById('new-entry-work').style.bottom = "-50%";
            document.getElementById('new-entry').style.bottom = 0;
            break;
        default:
            document.getElementById('new-entry-work').style.bottom = "-50%";
            document.getElementById('new-entry').style.bottom = "-50%";
            break;
    }

    if (newNoteVis) toggleNewNoteSelector();
}

function toggleSettingsPanel() {
    settingsVis = !settingsVis;
    const settingsPnl = document.getElementById('settings');
    if (settingsVis) {
        // Show Settings
        settingsPnl.classList.add('active');

        // Disable Search Bar
        if (searchVis === true) toggleSearch();

        // Hide Buttons
        document.getElementById('btn1').style.visibility = 'visible';
        document.getElementById('btn2').style.visibility = 'visible';
    }
    else {
        // Hide Settings
        settingsPnl.classList.remove('active');

        // Show Buttons
        document.getElementById('btn1').style.visibility = 'visible';
        document.getElementById('btn2').style.visibility = 'visible';
    }
}

function toggleFavColor() {
    favColorVis = !favColorVis;

    // H1
    // H2
    // bubble-h1



    var elements = Array.from(document.getElementsByTagName('h1'));

    if (favColorVis) {
        elements.forEach(element => {
            element.style.color = 'var(--app-color-scheme-custom-font-1)';
        });
    }
    else {
        elements.forEach(element => {
            element.style.removeProperty('color');
        });
    }

    elements = Array.from(document.getElementsByTagName('h2'));

    if (favColorVis) {
        elements.forEach(element => {
            element.style.color = 'var(--app-color-scheme-custom-font-2)';
        });
    }
    else {
        elements.forEach(element => {
            element.style.removeProperty('color');
        });
    }

    elements = Array.from(document.getElementsByClassName('underline'));

    if (favColorVis) {
        elements.forEach(element => {
            element.style.textDecorationColor = 'var(--app-color-scheme-custom-font-2)';
        });
    }
    else {
        elements.forEach(element => {
            element.style.removeProperty('text-decoration-color');
        });
    }

    elements = Array.from(document.getElementsByClassName('bubble-h1'));

    if (favColorVis) {
        elements.forEach(element => {
            element.style.color = 'var(--app-color-scheme-custom-font-1)';
        });
    }
    else {
        elements.forEach(element => {
            element.style.removeProperty('color');
        });
    }

    elements = Array.from(document.getElementsByClassName('bubble-wrapper'));

    if (favColorVis) {
        elements.forEach(element => {
            element.style.backgroundColor = 'var(--app-color-scheme-custom-2)';
        });
    }
    else {
        elements.forEach(element => {
            element.style.removeProperty('background-color');
        });
    }

    var temp = document.getElementById('titlecard');

    if (favColorVis) {
        temp.style.backgroundColor = 'var(--app-color-scheme-custom-1)';
    }
    else {
        temp.style.backgroundColor = 'var(--app-color-lemonlist-1)';
    }

    elements = Array.from(document.getElementsByClassName('call-button'));
    if (favColorVis) {
        elements.forEach(element => {
            element.id = "custom-color";
        });
    }
    else {
        elements.forEach(element => {
            element.id = "";
        });
    }

    elements = Array.from(document.getElementsByClassName('message-button'));
    if (favColorVis) {
        elements.forEach(element => {
            element.id = "custom-color";
        });
    }
    else {
        elements.forEach(element => {
            element.id = "";
        });
    }
}