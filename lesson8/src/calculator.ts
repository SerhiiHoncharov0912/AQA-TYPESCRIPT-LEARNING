import { MathOperations } from './math-operation';

export class Calculator {
    private value1 = 0;
    private value2 = 0;
    private isValue1Set = false;
    private isValue2Set = false;
    private operationType: MathOperations = 0;
    private isOperationTypeSet = false;

    public addValue1(value: number): void {
        this.value1 = value;
        this.isValue1Set = true;
    }

    public addValue2(value: number): void {
        this.value2 = value;
        this.isValue2Set = true;
    }

    public setOperationType(type: MathOperations): void {
        this.operationType = type;
        this.isOperationTypeSet = true;
    }

    public calculate(): number {
        if (!this.isValue1Set || !this.isValue2Set || !this.isOperationTypeSet) {
            throw new Error('Value1, Value2 or operationType is not set');
        }

        switch (this.operationType) {
            case MathOperations.Addition: {
                return this.value1 + this.value2;
            }
            case MathOperations.Subtraction: {
                return this.value1 - this.value2;
            }
            case MathOperations.Division: {
                if (this.value2 == 0) {
                    throw new Error('Division by zero is impossible');
                }
                return this.value1 / this.value2;
            }
            case MathOperations.Multiplication: {
                return this.value1 * this.value2;
            }
        }
    }
}
