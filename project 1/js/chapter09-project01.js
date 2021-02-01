
/* add code here  */
window.addEventListener("load", function () {
    document.querySelectorAll('.hilightable').forEach(item => {
    var highlightElement = document.querySelectorAll('.hilightable');
    for (i = 0; highlightElement.length; i++) {
        highlightElement[i].addEventListener("focus", checking);
        highlightElement[i].addEventListener("blur", checking);
    }
})
function checking(e) {
    if (e.type == "focus") {
        e.target.classlist.add("highlight");
    }
    else if (e.type == "blur") {
        e.target.classlist.remove("hilightable");
    }
}

       
var form = document.getElementById('mainform');
mainform.addEventListener('submit', Event => {
document.querySelectorAll('.required').forEach(item => {
if (item.value == "") {
item.classList.add('error');
 event.preventDefault();
}
else {
    item.classlist.remove("error");
}
});
});

/* add code here  */