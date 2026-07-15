// Add custom JavaScript here

function textRunner() {
    const textElement = document.getElementById("typing-text");
    const text = "I am Anu Adegbite."
    const delay = 100;

    textloop(textElement, text, delay);
}

function textloop(textElement, text, text_delay) {
    for(let i=0; i < text.length; i++) {
        setTimeout(()=> { textElement.textContent += text.charAt(i);}, text_delay*i);
    }
}

document.addEventListener("DOMContentLoaded", textRunner);