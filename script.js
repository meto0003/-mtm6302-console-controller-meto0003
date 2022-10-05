

function setTitle(newTitle){
   document.getElementById('title').innerHTML = newTitle
}

function setDescription(newDescription){
    document.getElementById('description').innerHTML = newDescription
 }
 
 function setBackgroundColor(newColor){
    document.getElementById('cont').style.backgroundColor = newColor;
 }
 
 function setFontColor(newFont){
    document.getElementById('cont').style.color = newFont;
 }
 
 function setTheme() {
    const dark = document.body;
    dark.classList.toggle('dark');

    const light = document.body;
    light.classList.toggle('light');
 }