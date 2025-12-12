var downloadElement = document.getElementsByClassName("download");
var modsDropdown = document.getElementsByClassName("moddrop");
var modsJson = fetch("../mods.json").then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
    .then(data => console.log(data))
    .catch(error => console.error('Failed to fetch data:', error)); 

for (var i = 2011; i >= 1900; --i) {
    var option = document.createElement('option');
    option.text = option.value = i;
    modsDropdown.appendChild(option, 0);
}


function downloadBegin(link, name) {
    console.log("Link: " + link + " File Name: " + name);
    const a = document.createElement("a");
    a.href = link;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function modValueChanged(value) {
    console.log("changed mod");
}