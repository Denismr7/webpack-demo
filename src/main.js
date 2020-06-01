// Selectors
import { getInputValue, mix } from './utils';
import "./styles.css";

const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const btn = document.getElementById("button")
const result = document.getElementById("result")
console.log("Iniciated Script...")

function handleMixing(text1, text2, result) {
    result.innerText = mix(getInputValue(text1), getInputValue(text2));
    console.log("Done!")
}

btn.addEventListener("click", function() {
    handleMixing(text1, text2, result)
})