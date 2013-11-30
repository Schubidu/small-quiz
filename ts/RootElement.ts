class RootElement implements HTMLUListElement {
    type:String;
    dataset:DOMStringMap;
    hidden:Boolean;
    compact:Boolean;

    msGetInputContext():MSInputMethodContext {
        return undefined;
    }
    private element:HTMLUListElement = null;

    constructor(element:HTMLUListElement) {
        this.element = element;
    }

    show() {
        this.element.className = 'show';
    }

    hide() {
        this.element.className = '';

    }
}