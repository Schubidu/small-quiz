var RandomList = (function () {
    function RandomList(items) {
        this.items = null;
        this.storageItems = null;
        this.currentItem = null;
        this.items = items;
        this.storageItems = [];
        this.onStart();
        this.next();
    }
    RandomList.prototype.getItems = function () {
        if (this.items.length == 0) {
            this.onFinish();
            this.items = this.storageItems.map(function (i) {
                return i;
            });
        }
        return this.items;
    };

    RandomList.prototype.getStorageItems = function () {
        return this.storageItems;
    };

    RandomList.prototype.next = function () {
        var randomItemIndex = Math.floor(Math.random() * (this.getItems().length));
        var items = this.getItems();

        this.currentItem = items[randomItemIndex];
        this.storageItems.push(this.currentItem);
        this.items.splice(randomItemIndex, 1);
    };

    RandomList.prototype.current = function () {
        return this.currentItem;
    };

    RandomList.prototype.randomize = function () {
    };
    return RandomList;
})();
var RootElement = (function () {
    function RootElement(element) {
        this.element = null;
        this.element = element;
    }
    RootElement.prototype.msGetInputContext = function () {
        return undefined;
    };

    RootElement.prototype.show = function () {
        this.element.className = 'show';
    };

    RootElement.prototype.hide = function () {
        this.element.className = '';
    };
    return RootElement;
})();
/// <reference path="RandomList.ts"/>
/// <reference path="RootElement.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RandomHtmlList = (function (_super) {
    __extends(RandomHtmlList, _super);
    function RandomHtmlList(listRoot) {
        var list = (listRoot.querySelectorAll('li'));
        this.rootElement = null;
        _super.call(this, Array.prototype.slice.call(list, 0));
        this.rootElement = new RootElement(listRoot);
    }
    RandomHtmlList.prototype.getItems = function () {
        return _super.prototype.getItems.call(this);
    };

    RandomHtmlList.prototype.current = function () {
        return _super.prototype.current.call(this);
    };

    RandomHtmlList.prototype.reset = function () {
        _super.prototype.getStorageItems.call(this).forEach(function (element) {
            var e = element;
            e.className = '';
        });
    };

    RandomHtmlList.prototype.show = function () {
        this.current().className = 'show';
    };

    RandomHtmlList.prototype.showNext = function () {
        this.reset();
        this.next();
        this.show();
    };

    RandomHtmlList.prototype.getRoot = function () {
        return this.rootElement;
    };
    return RandomHtmlList;
})(RandomList);
//# sourceMappingURL=main.js.map
