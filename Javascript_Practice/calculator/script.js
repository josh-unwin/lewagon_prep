window.addEventListener('load', () => {
class Calculator {
	constructor(previousOperandText, currentOperandText) {
		this.previousOperandText = previousOperandText;
		this.currentOperandText = currentOperandText;
		this.clear();
	}

	clear() {
		this.previousOperand = '';
		this.currentOperand = '';
		this.operation = undefined;
	}

	delete() {
		this.currentOperand = this.currentOperand.slice(0, -1);
	}

	appendNumber(number) {
		if (number === '.' && this.currentOperand.includes('.')) return
		this.currentOperand = this.currentOperand.toString() + number.toString();	}

	chooseOperation(operation) {
		if (this.currentOperand === '') return;
		if (this.previousOperand !== '') {
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}

	compute() {
		let computation
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(prev) || (isNaN(current))) return;
		switch (this.operation) {
		case '+': 
			computation = prev + current;
			break;
		case '-':
			computation = prev - current;
			break;
		case 'x':
			computation = prev * current;
			break;
		case '÷': 
			computation = prev / current;
			break;
		default: return;
		};
		this.currentOperand = computation;
		this.previousOperand = '';
		this.operation = undefined;

	}

	updateDisplay() {
		currentOperandText.innerText = this.currentOperand;
		console.log(this.operation);
		if (this.operation != null) {
			this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`
		} else {
		previousOperandText.innerText = this.previousOperand; }
	}
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button => {
		button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	})
});

allClearButton.addEventListener('click', () => {
	calculator.clear();
	calculator.updateDisplay();

});

operationButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
});

});

equalsButton.addEventListener('click', () => {
	calculator.compute();
	calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
	calculator.delete();
	calculator.updateDisplay();
});

});

