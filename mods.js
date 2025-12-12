load("../mods.json")


function downloadBegin(link, name) {
    const a = document.createElement("a");
    a.href = link;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function loadMODSLIST(fileName) {
    fetch(fileName)
        .then((res) => res.text())
        .then((text) => {
            let split = text.split('": {');
            for (var i = 0; i < split; i++){

            }
        })
        .catch((e) => console.error(e));

}