/// <reference path="IRandomItem.ts"/>
/// <reference path="RandomList.ts"/>
/// <reference path="RootElement.ts"/>

class RandomHtmlList extends RandomList {
    public rootElement:RootElement = null;

    public set RootElement(rootElement:RootElement){
        this.rootElement = rootElement;
    }

    static init(listRoot:HTMLUListElement):RandomHtmlList {
        var list = (<HTMLLIElement[]><any>listRoot.querySelectorAll('li'));
        var items = <Array<IRandomItem>> Array.prototype.slice.call(list, 0).map(function (element:HTMLElement) {
            var priority = (element.hasAttribute('data-priority')) ? <number><any> element.getAttribute('data-priority') : 0;
            return <IRandomItem>{
                content: element,
                priority: priority,
                defaultPriority: priority
            }
        });
        var randomHtmlList = new RandomHtmlList(items);
        randomHtmlList.RootElement = new RootElement(listRoot);
        return randomHtmlList;
    }

    reset() {
        super.getStorageItems().forEach(function (element:IRandomItem) {
            var e = <HTMLLIElement><any>element.content;
            e.className = '';
        })
    }

    show() {
        this.current().content.className = 'show';
    }

    showNext() {
        this.reset();
        this.next();
        this.show();
    }

    getRoot() {
        return this.rootElement;
    }

}