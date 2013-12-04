var RandomList = (function () {
    function RandomList(items) {
        this.items = null;
        this.storageItems = null;
        this.currentItem = null;
        this.isFinished = false;
        this.isStarted = true;
        this.onFinish = null;
        this.items = items;
        this.storageItems = [];

        this.next();
    }
    RandomList.prototype.getItems = function () {
        if (this.isFinished) {
            this.onFinish();
            this.isFinished = false;
        }
        if (this.items.length == 0) {
            this.items = this.storageItems.map(function (i) {
                i.priority = i.defaultPriority;
                return i;
            });
            this.isFinished = true;
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

        if (!this.isStarted) {
            this.storageItems.push(this.currentItem);
            this.items.splice(randomItemIndex, 1);
        } else {
            this.isStarted = false;
        }
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
        this.visibility = true;
        this.element = element;
    }
    RootElement.prototype.show = function () {
        this.visibility = true;
        this.element.className = 'show';
    };

    RootElement.prototype.hide = function () {
        this.visibility = false;
        this.element.className = '';
    };
    return RootElement;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RandomHtmlList = (function (_super) {
    __extends(RandomHtmlList, _super);
    function RandomHtmlList() {
        _super.apply(this, arguments);
        this.rootElement = null;
    }
    Object.defineProperty(RandomHtmlList.prototype, "RootElement", {
        set: function (rootElement) {
            this.rootElement = rootElement;
        },
        enumerable: true,
        configurable: true
    });

    RandomHtmlList.init = function (listRoot) {
        var list = (listRoot.querySelectorAll('li'));
        var items = Array.prototype.slice.call(list, 0).map(function (element) {
            var priority = (element.hasAttribute('data-priority')) ? element.getAttribute('data-priority') : 0;
            return {
                content: element,
                priority: priority,
                defaultPriority: priority
            };
        });
        var randomHtmlList = new RandomHtmlList(items);
        randomHtmlList.RootElement = new RootElement(listRoot);
        return randomHtmlList;
    };

    RandomHtmlList.prototype.reset = function () {
        _super.prototype.getStorageItems.call(this).forEach(function (element) {
            var e = element.content;
            e.className = '';
        });
    };

    RandomHtmlList.prototype.show = function () {
        this.current().content.className = 'show';
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
