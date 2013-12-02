class RandomList {
    private items:Array = null;
    private storageItems:Array = null;
    private currentItem:any = null;
    public onStart:() => void;
    public onFinish:() => void;


    constructor(items:Array) {
        this.items = items;
        this.storageItems = [];
        this.onStart();
        this.next();
    }

    getItems():Array {
        if (this.items.length == 0) {
            this.onFinish();
            this.items = this.storageItems.map(function (i) {
                return i;
            });
        }
        return this.items;
    }

    getStorageItems():Array {
        return this.storageItems;
    }

    next():void {
        var randomItemIndex = Math.floor(Math.random() * (this.getItems().length));
        var items = this.getItems();

        this.currentItem = items[randomItemIndex];
        this.storageItems.push(this.currentItem);
        this.items.splice(randomItemIndex, 1);
    }

    current():any {
        return this.currentItem;
    }


    randomize() {

    }
}