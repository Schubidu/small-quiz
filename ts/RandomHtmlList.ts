/// <reference path="RandomList.ts"/>
/// <reference path="RootElement.ts"/>

class RandomHtmlList extends RandomList {
    private rootElement:HTMLUListElement = null;

    constructor(listRoot:HTMLUListElement) {
        var list = (<HTMLLIElement[]><any>listRoot.querySelectorAll('li'));
        super(<HTMLLIElement[]> Array.prototype.slice.call(list, 0));
        this.rootElement = new RootElement(listRoot);
    }

    getItems() {
        return <HTMLLIElement[]> super.getItems();
    }

    current():HTMLLIElement {
        return <HTMLLIElement> super.current();
    }

    reset() {
        super.getStorageItems().forEach(function (element) {
            var e = <HTMLLIElement><any>element;
            e.className = '';
        })
    }

    show() {
        this.current().className = 'show';
    }

    showNext() {
        this.reset();
        this.next();
        this.show();
    }

    getRoot(){
        return this.rootElement;
    }

}