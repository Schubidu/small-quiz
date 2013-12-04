class RootElement {
    private element:HTMLUListElement = null;
    private visibility = true;

    constructor(element:HTMLUListElement) {
        this.element = element;
    }

    show() {
        this.visibility = true;
        this.element.className = 'show';
    }

    hide() {
        this.visibility = false;
        this.element.className = '';
    }

    isVisible() {
        return this.visibility;
    }
}
