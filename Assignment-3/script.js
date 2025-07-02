const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value !== null) {
            expression += value;
            display.value = expression;
        }
    });
});

clear.addEventListener('click', () => {
    expression = '';
    display.value = '';
});

equals.addEventListener('click', () => {
    try {
        expression = eval(expression);
        display.value = expression;
    } catch {
        display.value = 'Error';
        expression = '';
    }
});

document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
        expression += e.key;
        display.value = expression;
    } else if (e.key === 'Enter') {
        try {
            expression = eval(expression);
            display.value = expression;
        } catch {
            display.value = 'Error';
            expression = '';
        }
    } else if (e.key === 'Backspace') {
        expression = expression.slice(0, -1);
        display.value = expression;
    }
});
const backspace = document.getElementById('backspace');

backspace.addEventListener('click', () => {
    expression = expression.slice(0, -1);
    display.value = expression;
});
