function OpenPage(input)
{
    document.getElementById("UI-Settings").className = input === 0 ? "options-page-enabled" : "options-page";
    document.getElementById("Audio-Settings").className = input === 1 ? "options-page-enabled" : "options-page";
    document.getElementById("Personal-Settings").className = input === 2 ? "options-page-enabled" : "options-page";
}