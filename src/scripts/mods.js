load("/src/data/mods.json")

var mods = null;

var modEntries = null;

function downloadBegin(link, name) {
    const a = document.createElement("a");
    a.href = link;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function load(fileName) {
    mods = await getData();
    console.log(mods);
    var modsUi = document.querySelector("#mods");
    modEntries = Object.entries(mods);
    var i = 0;
    for (const [name, mod] of modEntries) {
        modsUi.innerHTML += `<button class="mod" onclick="loadNewMod(${i})">${name}</button>`;
        i++;
    }
    loadNewMod(0);
    async function getData() {
        var res = await fetch(fileName);
        var data = await res.json();

        return data;
    }
}

function loadNewMod(index) {
    var [name, mod] = modEntries[index];
    var modicon = document.querySelector("#modicon")
    modicon.src = `/${mod["IconLocation"]}`;
    var modTitle = document.querySelector("#modtitle");
    modTitle.innerHTML = name;
    var moddesc = document.querySelector("#moddesc");
    moddesc.innerHTML = `${mod["Description"]}`;
    var modsite = document.querySelector("#modsite");
    modsite.href = `${mod["Link"]}`;
    var moddownload = document.querySelector("#moddownload");
    moddownload.href = `/${mod["ModLocation"]}`
}