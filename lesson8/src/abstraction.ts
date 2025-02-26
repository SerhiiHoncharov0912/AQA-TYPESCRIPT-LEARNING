export abstract class WebElement {
    public clickElement(): void {
        console.log('Click element');
    }

    public abstract focusElement(): void;
}

export class Button extends WebElement {
    public focusElement(): Button {
        console.log('Focus on element');
        return this;
    }
}


