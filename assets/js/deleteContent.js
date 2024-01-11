const element = document.getElementById("delCard");
const child = document.getElementById("cardRemove1");
element.insertBefore(child);

function removevalue() {
    document.getElementById("cardRemove1").remove();
}