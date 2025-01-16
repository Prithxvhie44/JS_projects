class Calculator {
    constructor() {
        this.display = document.querySelector('.calculator-screen');
        this.keys = document.querySelector('.calculator-keys');
        this.operator = '';
        this.currentValue = '';
        this.previousValue = '';
        this.addEventListeners();
    }

    addEventListeners() {
        this.keys.addEventListener('click', (event) => {
            const { target } = event;
            const { value } = target;

            if (!target.matches('button')) {
                return;
            }

            switch (value) {
                case '+':
                case '-':
                case '*':
                case '/':
                    this.handleOperator(value);
                    break;
                case '=':
                    this.calculate();
                    break;
                case 'all-clear':
                    this.clear();
                    break;
                case '.':
                    this.inputDecimal();
                    break;
                default:
                    if (Number.isInteger(parseFloat(value))) {
                        this.inputNumber(value);
                    }
            }

            this.updateDisplay();
        });
    }

    handleOperator(nextOperator) {
        const { currentValue, operator, previousValue } = this;

        if (operator && currentValue === '') {
            this.operator = nextOperator;
            return;
        }

        if (previousValue === '') {
            this.previousValue = currentValue;
        } else if (operator) {
            const result = this.performCalculation(operator, parseFloat(previousValue), parseFloat(currentValue));
            this.currentValue = `${parseFloat(result.toFixed(7))}`;
            this.previousValue = result;
        }

        this.operator = nextOperator;
        this.currentValue = '';
    }

    performCalculation(operator, firstOperand, secondOperand) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            default:
                return secondOperand;
        }
    }

    calculate() {
        let result;
        const { currentValue, operator, previousValue } = this;

        if (operator && currentValue) {
            result = this.performCalculation(operator, parseFloat(previousValue), parseFloat(currentValue));
            this.currentValue = `${parseFloat(result.toFixed(7))}`;
            this.previousValue = '';
            this.operator = '';
        }
    }

    clear() {
        this.currentValue = '';
        this.previousValue = '';
        this.operator = '';
    }

    inputDecimal() {
        if (!this.currentValue.includes('.')) {
            this.currentValue += '.';
        }
    }

    inputNumber(number) {
        if (this.currentValue === '0') {
            this.currentValue = number;
        } else {
            this.currentValue += number;
        }
    }

    updateDisplay() {
        this.display.value = this.currentValue;
    }
}

const calculator = new Calculator();