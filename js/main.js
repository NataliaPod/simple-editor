let textareaEl = document.querySelector("#editor");
let divEl = document.querySelector(".ba-container");

document.addEventListener('keydown', (event) => {
    if(event.ctrlKey && event.keyCode == "69"){
        event.preventDefault();
        divEl.hidden = true;
        textareaEl.hidden = false;
        textareaEl.innerHTML = divEl.innerHTML;
        textareaEl.focus();
        return false;
    };
    
    if(event.ctrlKey && event.keyCode == "83"){
        event.preventDefault();
        divEl.hidden = false;
        textareaEl.hidden = true;
        
        divEl.innerHTML = textareaEl.value;
        textareaEl.focus();
        return false;
    }else if (event.key == "Escape"){
        divEl.hidden = false;
        textareaEl.hidden = true;
    };
});