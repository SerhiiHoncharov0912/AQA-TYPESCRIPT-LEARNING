import { Button } from "./abstraction";
import { Calculator } from "./calculator";
import { MathOperations } from "./math-operation";
import { Repositories, Repository } from "./response-interface";
import { ShortDto } from "./short-dto";

async function functionForTask4(): Promise<Repositories> {
    const response = await fetch('https://api.github.com/users/hadley/repos');
    const json = (await response.json()) as Repositories;
    return json;
}

async function functionForTask5(repo: Repository): Promise<ShortDto> {
    const shortDtos = new ShortDto(repo);
    return shortDtos;
}

(async () => {
    const json = await functionForTask4();
    console.log(json[0]);
})();

(async () => {
    const json = await functionForTask4();
    const shortDto = await functionForTask5(json[0]);
    console.log(shortDto);
})();


const calculator = new Calculator();
calculator.addValue1(10);
calculator.addValue2(15);
calculator.setOperationType(MathOperations.Division);
const result = calculator.calculate();
console.log(result);

// task6
const button = new Button();
button.focusElement().clickElement();
