
function downloadBegin(link, name) {
    const a = document.createElement("a");
    a.href = link;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}