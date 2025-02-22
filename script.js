const colorInput = document.getElementById('colorInput');
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');

// Update color box and hex code
colorInput.addEventListener('input', () => {
    const color = colorInput.value;
    colorBox.style.backgroundColor = color;
    hexCode.textContent = color.toUpperCase();
});

// Copy color to clipboard
function copyColor() {
    navigator.clipboard.writeText(hexCode.textContent);
    alert('Copied: ' + hexCode.textContent);
}