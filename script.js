function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch {
        display.value = 'Error';
    }
}
