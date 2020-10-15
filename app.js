// SELECT DOM ELEMENTS
const textDisplay = document.querySelector('#textDisplay');
const lengthInput = document.querySelector('#lengthInput');
const generateButton = document.querySelector('#generateButton');

// CHARACTER SETS
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\',.?!;:()-                    ';

// GENERATION FUNCTIONS
function generate(length) {
    let result = '';
    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// CLICK EVENTS
generateButton.addEventListener("click", function() {
    textDisplay.innerHTML = generate(lengthInput.value);
});