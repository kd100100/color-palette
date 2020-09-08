// Swapping
function swap_color(){
    let txt_current = document.getElementById('txt_color').value;
    let bg_current = document.getElementById('bg_color').value;
    document.getElementById('txt_color').value = bg_current;
    document.getElementById('box_txt').style.color = document.getElementById('txt_color').value;
    document.getElementById('bg_color').value = txt_current;
    document.getElementById('box_bg').style.background = document.getElementById('bg_color').value;
    console.log("Swapped");
}

// Apply Button
function change_all(){
    document.getElementById('box_txt').style.color = document.getElementById('txt_color').value;
    console.log("Text Colour changed to",document.getElementById('txt_color').value);
    document.getElementById('box_bg').style.background = document.getElementById('bg_color').value;
    console.log("Background Colour changed to", document.getElementById('bg_color').value);
}

// Reset Button
function reset(){
    document.getElementById('box_txt').style.color = "#6beeff";
    document.getElementById('txt_color').value = "#6beeff";
    document.getElementById('box_bg').style.background = "#000000"; 
    document.getElementById('bg_color').value = "#000000";
}